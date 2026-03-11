import './globals.css';
import type { ReactNode } from 'react';
import { headers } from 'next/headers';
import { RootProvider } from 'fumadocs-ui/provider';
import { Banner } from 'fumadocs-ui/components/banner';
import { AskAI } from '@/components/ask-ai';
import { defaultLocale } from '@/lib/i18n';

export const metadata = {
  title: {
    template: '%s — Agents Authority',
    default: 'Agents Authority Docs',
  },
  description: 'Commerce infrastructure for AI agents.',
  icons: { icon: '/favicon.svg' },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headersList = await headers();
  const lang = headersList.get('x-locale') ?? defaultLocale;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <Banner id="alpha-banner">
          Agents Authority — v1.0 · Alpha. APIs and features may change before general availability.
        </Banner>
        <RootProvider>
          {children}
          <AskAI />
        </RootProvider>
      </body>
    </html>
  );
}
