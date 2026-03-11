import { createAnthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

const anthropic = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: anthropic('claude-sonnet-4-6'),
    system: `You are a helpful assistant for Agents Authority — commerce infrastructure for AI agents. Answer questions about the MCP Server (41 tools) and WooCommerce Plugin. Be concise.`,
    messages,
    maxTokens: 1024,
  });
  return result.toDataStreamResponse();
}
