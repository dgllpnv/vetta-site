import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { ContactStatus } from '@prisma/client';

// Validação de email simples
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitização básica
function sanitize(str: string): string {
  return str.trim().slice(0, 5000); // Limita tamanho
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, interest, message } = body;

    // Validações
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Nome é obrigatório e deve ter pelo menos 2 caracteres' },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Mensagem é obrigatória e deve ter pelo menos 10 caracteres' },
        { status: 400 }
      );
    }

    const validInterests = ['acolheduc', 'nexusvr', 'lumina', 'cbt', 'automacoes', 'custom', 'other', ''];
    const interestValue = interest && validInterests.includes(interest) ? interest : 'other';

    // Salvar no banco
    const contact = await prisma.contact.create({
      data: {
        name: sanitize(name),
        email: sanitize(email).toLowerCase(),
        company: company ? sanitize(company) : null,
        interest: interestValue,
        message: sanitize(message),
      },
    });

    // TODO: Enviar email de notificação (Resend)
    // TODO: Enviar para Slack/Discord

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        id: contact.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao salvar contato:', error);
    return NextResponse.json(
      { error: 'Erro interno ao processar sua mensagem. Tente novamente.' },
      { status: 500 }
    );
  }
}

// GET para listar contatos (protegido - futuro admin)
export async function GET(request: NextRequest) {
  try {
    // TODO: Adicionar autenticação
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');

    const contacts = await prisma.contact.findMany({
      where: status ? { status: status as ContactStatus } : undefined,
      orderBy: { createdAt: 'desc' },
      take: Math.min(limit, 100),
    });

    return NextResponse.json({ contacts, total: contacts.length });
  } catch (error) {
    console.error('Erro ao listar contatos:', error);
    return NextResponse.json(
      { error: 'Erro ao listar contatos' },
      { status: 500 }
    );
  }
}
