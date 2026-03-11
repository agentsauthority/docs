'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import { MessageCircle, X, Send } from 'lucide-react';

export function AskAI() {
  const [open, setOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({ api: '/api/chat' });

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl bg-[#D4773A] px-4 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-[#B85E22] transition-colors"
        aria-label="Ask AI"
      >
        <MessageCircle className="size-4" />
        Ask AI
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 rounded-2xl border border-fd-border bg-fd-background shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-fd-border bg-[#D4773A]">
            <span className="text-sm font-semibold text-white">Ask Agents Authority</span>
            <button onClick={() => setOpen(false)} className="text-white hover:opacity-70">
              <X className="size-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-96 min-h-32">
            {messages.length === 0 && (
              <p className="text-xs text-fd-muted-foreground">
                Ask me anything about the MCP Server or WooCommerce Plugin.
              </p>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`text-xs rounded-lg px-3 py-2 ${
                  m.role === 'user'
                    ? 'bg-[#D4773A]/10 text-fd-foreground ml-4'
                    : 'bg-fd-muted text-fd-foreground mr-4'
                }`}
              >
                {m.content}
              </div>
            ))}
            {isLoading && (
              <div className="text-xs text-fd-muted-foreground animate-pulse">Thinking…</div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-fd-border">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask a question…"
              className="flex-1 text-xs bg-fd-muted rounded-lg px-3 py-2 outline-none text-fd-foreground placeholder:text-fd-muted-foreground"
            />
            <button
              type="submit"
              disabled={!input || isLoading}
              className="p-2 rounded-lg bg-[#D4773A] text-white disabled:opacity-40 hover:bg-[#B85E22] transition-colors"
            >
              <Send className="size-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
