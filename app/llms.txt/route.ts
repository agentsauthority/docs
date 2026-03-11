import { source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const pages = source.getPages();
  const baseUrl = 'https://docs.agentsauthority.com';
  const header = `# Agents Authority Documentation\n\nCommerce infrastructure for AI agents.\n\n## Pages\n`;
  const links = pages
    .map((p) => `- [${p.data.title}](${baseUrl}${p.url}): ${p.data.description ?? ''}`)
    .join('\n');
  return new Response(header + links, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
