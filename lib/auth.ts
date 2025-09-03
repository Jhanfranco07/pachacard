// lib/auth.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

function normalizeTier(t: any): "BASIC" | "NORMAL" | "PREMIUM" {
  const k = String(t ?? "").trim().toUpperCase();
  if (k === "BASIC" || k === "NORMAL" || k === "PREMIUM") return k as any;
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
      async authorize(c) {
        const email = String(c?.email || "").toLowerCase().trim();
        const pass = String(c?.password || "");
        if (!email || !pass) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return null;

        const ok = await bcrypt.compare(pass, user.passwordHash);
        if (!ok || user.status !== "ACTIVE") return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          tier: normalizeTier(user.tier),
        } as any;
      },
    }),
  ],

  pages: { signIn: "/login", error: "/login" },

  callbacks: {
    // Guarda datos en el JWT
    async jwt({ token, user }) {
      if (user) {
        // asegúrate de que el id quede en el token
        (token as any).sub = (user as any).id ?? (token as any).sub ?? null;
        (token as any).role = (user as any).role || "USER";
        (token as any).tier = normalizeTier((user as any).tier);
      }
      return token;
    },

    // Proyecta datos del JWT a la sesión (lo que lee tu app)
    async session({ session, token, user }) {
      // inyecta el id en session.user.id (MUY importante para tus consultas)
      if (session.user) {
        (session.user as any).id =
          (token as any).sub ?? (user as any)?.id ?? null;
      }
      (session as any).role = (token as any).role || "USER";
      (session as any).tier = normalizeTier((token as any).tier);
      return session;
    },
  },
} as NextAuthOptions);
