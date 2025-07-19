import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Document',
};

async function getContent(): Promise<string> {
  const res = await fetch('http://localhost:3000/api/test-content'); // Adjust URL
  const data = await res.json();
  return data.content; // content should be raw HTML string
}

export default async function TestPage() {
  const content = await getContent();

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}
