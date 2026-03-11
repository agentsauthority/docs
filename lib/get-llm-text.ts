import { source } from '@/lib/source';
import type { InferPageType } from 'fumadocs-core/source';

export async function getLLMText(page: InferPageType<typeof source>) {
  const data = page.data as unknown as Record<string, unknown>;
  const structuredData = data.structuredData as
    | { headings?: unknown[]; contents?: Array<{ content?: string; heading?: string }> }
    | undefined;

  let sections = '';
  if (structuredData?.contents && Array.isArray(structuredData.contents)) {
    sections = structuredData.contents
      .map((s) => [s.heading ? `## ${s.heading}` : '', s.content ?? ''].filter(Boolean).join('\n'))
      .join('\n\n');
  }

  const description = typeof data.description === 'string' ? data.description : '';

  return `# ${page.data.title} (${page.url})

${description ? `${description}\n\n` : ''}${sections}`;
}
