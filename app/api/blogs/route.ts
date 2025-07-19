// app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json({ blogs });
}
