// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const path = nextUrl.pathname;

  // Rutas públicas y estáticos (excluirlas del guard)
  const isPublic =
    path === "/login" ||
    path === "/logout" ||
    path.startsWith("/api/auth") ||
    path.startsWith("/_next") ||
    path.startsWith("/favicon") ||
    path.startsWith("/icons") ||
    path.startsWith("/brand") ||
    path.startsWith("/uploads") ||
    /\.(png|jpg|jpeg|svg|webp|ico)$/.test(path);

  if (isPublic) return NextResponse.next();

  const isPrivate = path.startsWith("/app") || path.startsWith("/admin");

  // Lee el JWT de la cookie en Edge (producción). secureCookie:true en https
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: true,
  });

  // No autenticado: redirige a /login con callbackUrl
  if (isPrivate && !token) {
    const url = new URL("/login", nextUrl);
    url.searchParams.set("callbackUrl", path + nextUrl.search);
    return NextResponse.redirect(url);
  }

  // Admin: exige role ADMIN en el token (si usas control por rol)
  if (path.startsWith("/admin") && token?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  // Si ya está logueado e intenta ir a /login, mándalo a /app
  if (token && (path === "/login" || path.startsWith("/login"))) {
    return NextResponse.redirect(new URL("/app", nextUrl));
  }

  return NextResponse.next();
}

// No interceptar estáticos ni el flujo de Auth
export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|icons|brand|uploads|.*\\.(png|jpg|jpeg|svg|webp|ico)).*)",
  ],
};
