'use client';

import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

export function LLMCopyButton({ markdownUrl }: { markdownUrl: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const res = await fetch(markdownUrl);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
    } catch {
      await navigator.clipboard.writeText(
        `${window.location.origin}${markdownUrl}`,
      );
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? 'Copied!' : 'Copy as Markdown'}
    </button>
  );
}

export function ViewOptions({ markdownUrl }: { markdownUrl: string }) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://docs.agentsauthority.com';
  return (
    <div className="flex items-center gap-3">
      <a
        href={`https://claude.ai/new?q=${encodeURIComponent(`${origin}${markdownUrl}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors"
      >
        <ExternalLink className="size-3.5" />
        Ask Claude
      </a>
      <a
        href={`https://chatgpt.com/?q=${encodeURIComponent(`${origin}${markdownUrl}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors"
      >
        <ExternalLink className="size-3.5" />
        Ask ChatGPT
      </a>
    </div>
  );
}
