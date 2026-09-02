import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface Params {
  params: Promise<{ key: string }>;
}

// GET /api/content/[key] - Buscar conteúdo por chave
export async function GET(_request: NextRequest, { params }: Params) {
  try {
    const { key } = await params;

    const content = await prisma.content.findUnique({
      where: { key, isActive: true },
    });

    if (!content) {
      return NextResponse.json(
        { error: 'Conteúdo não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      key: content.key,
      title: content.title,
      content: content.content,
      metadata: content.metadata,
    });
  } catch (error) {
    console.error('Erro ao buscar conteúdo:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar conteúdo' },
      { status: 500 }
    );
  }
}

// PUT /api/content/[key] - Criar ou atualizar conteúdo (protegido - futuro admin)
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    // TODO: Adicionar autenticação admin
    const { key } = await params;
    const body = await request.json();
    const { title, content, metadata, isActive } = body;

    if (!content || typeof content !== 'string') {
      return NextResponse.json(
        { error: 'content é obrigatório' },
        { status: 400 }
      );
    }

    const result = await prisma.content.upsert({
      where: { key },
      update: {
        title: title || null,
        content,
        metadata: metadata || null,
        isActive: isActive ?? true,
      },
      create: {
        key,
        title: title || null,
        content,
        metadata: metadata || null,
        isActive: isActive ?? true,
      },
    });

    return NextResponse.json({
      success: true,
      key: result.key,
      message: 'Conteúdo salvo com sucesso',
    });
  } catch (error) {
    console.error('Erro ao salvar conteúdo:', error);
    return NextResponse.json(
      { error: 'Erro ao salvar conteúdo' },
      { status: 500 }
    );
  }
}

// DELETE /api/content/[key] - Desativar conteúdo (soft delete)
export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    // TODO: Adicionar autenticação admin
    const { key } = await params;

    await prisma.content.update({
      where: { key },
      data: { isActive: false },
    });

    return NextResponse.json({
      success: true,
      message: 'Conteúdo desativado',
    });
  } catch (error) {
    console.error('Erro ao desativar conteúdo:', error);
    return NextResponse.json(
      { error: 'Erro ao desativar conteúdo' },
      { status: 500 }
    );
  }
}
