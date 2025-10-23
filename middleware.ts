// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

/**
 * - Permite libremente: /login, /logout y /api/auth/*
 * - Protege: /app/** y /admin/**
 *   - Si no hay sesión → redirige a /login?callbackUrl=...
 *   - Si entra a /admin y no es ADMIN → redirige a /app
 */
export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Rutas públicas
  if (
    pathname === "/login" ||
    pathname === "/logout" ||
    pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  // Sólo interceptamos lo que declaramos en `matcher` (abajo), pero
  // por claridad mantenemos estas comprobaciones.
  const isPrivate = pathname.startsWith("/app") || pathname.startsWith("/admin");
  if (!isPrivate) return NextResponse.next();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // No autenticado → a login con callback
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("callbackUrl", pathname + search);
    return NextResponse.redirect(url);
  }

  // Admin guard
  if (pathname.startsWith("/admin")) {
    const role = (token as any).role ?? "USER";
    if (role !== "ADMIN") {
      return NextResponse.redirect(new URL("/app", req.url));
    }
  }

  return NextResponse.next();
}

/**
 * Importante: usa globs, NO regex con grupos.
 * Así evitamos el error de "Capturing groups are not allowed".
 */
export const config = {
  matcher: ["/app/:path*", "/admin/:path*"],
};
