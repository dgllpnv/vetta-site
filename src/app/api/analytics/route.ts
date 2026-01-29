import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Detectar dispositivo pelo User-Agent
function getDevice(ua: string): string {
  if (/mobile/i.test(ua)) return 'mobile';
  if (/tablet/i.test(ua)) return 'tablet';
  return 'desktop';
}

// Detectar navegador
function getBrowser(ua: string): string {
  if (/chrome/i.test(ua) && !/edg/i.test(ua)) return 'Chrome';
  if (/firefox/i.test(ua)) return 'Firefox';
  if (/safari/i.test(ua) && !/chrome/i.test(ua)) return 'Safari';
  if (/edg/i.test(ua)) return 'Edge';
  if (/opera|opr/i.test(ua)) return 'Opera';
  return 'Other';
}

// POST /api/analytics - Registrar page view ou evento
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, sessionId, page, name, data, referrer } = body;

    if (!sessionId || !page) {
      return NextResponse.json(
        { error: 'sessionId e page são obrigatórios' },
        { status: 400 }
      );
    }

    const userAgent = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown';

    if (type === 'pageview') {
      // Registrar page view
      await prisma.pageView.create({
        data: {
          sessionId,
          page,
          referrer: referrer || null,
          userAgent,
          ip,
          device: getDevice(userAgent),
          browser: getBrowser(userAgent),
        },
      });

      // Atualizar ou criar sessão
      const existingSession = await prisma.session.findFirst({
        where: { id: sessionId },
      });

      if (existingSession) {
        await prisma.session.update({
          where: { id: sessionId },
          data: {
            lastPage: page,
            pageCount: { increment: 1 },
          },
        });
      } else {
        // Extrair UTM params se existirem
        const url = new URL(request.url);
        await prisma.session.create({
          data: {
            id: sessionId,
            firstPage: page,
            lastPage: page,
            utmSource: url.searchParams.get('utm_source'),
            utmMedium: url.searchParams.get('utm_medium'),
            utmCampaign: url.searchParams.get('utm_campaign'),
          },
        });
      }
    } else if (type === 'event') {
      // Registrar evento customizado
      if (!name) {
        return NextResponse.json(
          { error: 'name é obrigatório para eventos' },
          { status: 400 }
        );
      }

      await prisma.event.create({
        data: {
          sessionId,
          name,
          page,
          data: data || null,
        },
      });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Erro ao registrar analytics:', error);
    // Não retornamos erro para não afetar UX
    return NextResponse.json({ success: true }, { status: 200 });
  }
}

// GET /api/analytics - Dashboard de métricas (protegido - futuro admin)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '7');

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Métricas básicas
    const [totalPageViews, uniqueSessions, topPages, topEvents] = await Promise.all([
      // Total de page views
      prisma.pageView.count({
        where: { createdAt: { gte: startDate } },
      }),

      // Sessões únicas
      prisma.session.count({
        where: { createdAt: { gte: startDate } },
      }),

      // Top páginas
      prisma.pageView.groupBy({
        by: ['page'],
        _count: { page: true },
        where: { createdAt: { gte: startDate } },
        orderBy: { _count: { page: 'desc' } },
        take: 10,
      }),

      // Top eventos
      prisma.event.groupBy({
        by: ['name'],
        _count: { name: true },
        where: { createdAt: { gte: startDate } },
        orderBy: { _count: { name: 'desc' } },
        take: 10,
      }),
    ]);

    return NextResponse.json({
      period: `${days} dias`,
      totalPageViews,
      uniqueSessions,
      topPages: topPages.map((p) => ({ page: p.page, views: p._count.page })),
      topEvents: topEvents.map((e) => ({ event: e.name, count: e._count.name })),
    });
  } catch (error) {
    console.error('Erro ao buscar analytics:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar analytics' },
      { status: 500 }
    );
  }
}
