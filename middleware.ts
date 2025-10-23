// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isPublic =
    path === "/login" ||
    path === "/logout" ||
    path.startsWith("/api/auth") ||
    path.startsWith("/redeem");

  // Solo protegemos /app y /admin
  const needsAuth = path.startsWith("/app") || path.startsWith("/admin");

  if (!isPublic && needsAuth) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("callbackUrl", req.nextUrl.pathname + req.nextUrl.search);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// ✅ Nada de RegExp complejas aquí
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icons|brand|uploads|api/auth).*)",
  ],
};
