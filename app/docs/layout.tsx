import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { ShoppingBag } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <span className="flex items-center gap-2 font-semibold">
            <ShoppingBag className="size-5 text-[#D4773A]" />
            Agents Authority
          </span>
        ),
      }}

      sidebar={{
        footer: (
          <a
            href="mailto:hello@agentsauthority.com"
            className="text-xs text-fd-muted-foreground hover:text-fd-foreground"
          >
            Support
          </a>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
