import { docs } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

const mdxSource = createMDXSource(docs.docs, docs.meta);

// fumadocs-mdx returns files as a function, but fumadocs-core expects an array
const files = typeof mdxSource.files === 'function'
  ? (mdxSource.files as unknown as () => typeof mdxSource.files)()
  : mdxSource.files;

export const source = loader({
  baseUrl: '/docs',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: { files } as any,
});
