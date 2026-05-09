import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { z } from 'zod';

const waitlistSchema = z.object({
  instagram: z.string().min(2).max(30),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { instagram } = waitlistSchema.parse(body);
    const cleanInstagram = instagram.replace('@', '').trim().toLowerCase();

    const prisma = getDb();

    const lead = await prisma.waitlistLead.upsert({
      where: { instagram: cleanInstagram },
      update: {},
      create: { instagram: cleanInstagram },
    });

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error('Error en waitlist:', error);
    return NextResponse.json(
      { error: 'Error procesando la solicitud.' },
      { status: 400 },
    );
  }
}
