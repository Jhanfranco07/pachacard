// lib/auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

/** Normaliza el tier a uno de los 3 valores válidos */
function normalizeTier(t: unknown): "BASIC" | "NORMAL" | "PREMIUM" {
  const k = String(t ?? "").trim().toUpperCase();
  if (k === "BASIC" || k === "NORMAL" || k === "PREMIUM") return k;
  return "BASIC";
}

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  session: { strategy: "jwt" },

  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(creds) {
        const email = String(creds?.email || "").toLowerCase().trim();
        const pass = String(creds?.password || "");
        if (!email || !pass) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return null;

        const ok = await bcrypt.compare(pass, user.passwordHash);
        if (!ok || user.status !== "ACTIVE") return null;

        // Este objeto se convierte en "user" del callback jwt
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: (user.role as "USER" | "ADMIN") ?? "USER",
          tier: normalizeTier(user.tier),
        } as any;
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/login",
  },

  callbacks: {
    /** Guardamos info en el JWT */
    async jwt({ token, user }) {
      if (user) {
        // asegura que el id quede en token.sub
        token.sub = (user as any).id ?? token.sub ?? null;
        token.role = (user as any).role ?? "USER";
        token.tier = normalizeTier((user as any).tier);
      }
      return token;
    },

    /** Proyectamos del JWT hacia la sesión consumida por la app */
    async session({ session, token, user }) {
      // poner id en session.user.id (lo usa tu app)
      if (session.user) {
        (session.user as any).id = token.sub ?? (user as any)?.id ?? null;
      }
      // además exponemos role/tier a nivel raíz de la sesión (lo lee tu middleware)
      (session as any).role = (token as any).role ?? "USER";
      (session as any).tier = normalizeTier((token as any).tier);
      return session;
    },
  },
});
