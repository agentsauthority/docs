import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, detectLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const locale = detectLocale(request.headers.get("accept-language")) ?? defaultLocale;
  const response = NextResponse.next();
  response.headers.set("x-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon|.*\\..*).*)"],
};
