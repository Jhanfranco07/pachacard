// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Rutas públicas: login, logout (si lo usas), auth de NextAuth, canje por QR y estáticos
  if (
    pathname === "/login" ||
    pathname === "/logout" ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/redeem") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".svg")
  ) {
    return NextResponse.next();
  }

  // Solo protegemos /app y /admin (ajusta si quieres más)
  const needsAuth = pathname.startsWith("/app") || pathname.startsWith("/admin");
  if (needsAuth) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      // opcional: envía a login con callback de regreso
      url.searchParams.set("callbackUrl", req.nextUrl.pathname + req.nextUrl.search);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // no interceptar estáticos
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
