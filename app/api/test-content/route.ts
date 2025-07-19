// app/api/test-content/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const content = `
    <h1>Hello from backend!</h1>
    <p>This is some <strong>dynamic HTML</strong> content.</p>
  `;

  return NextResponse.json({ content });
}
