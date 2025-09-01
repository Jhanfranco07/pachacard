// lib/auth.ts
import NextAuth from "next-auth";
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
      credentials: { email: { label: "Email", type: "email" }, password: { label: "Password", type: "password" } },
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
          tier: normalizeTier(user.tier), // ← normalizamos aquí
        } as any;
      },
    }),
  ],
  pages: { signIn: "/login", error: "/login" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role || "USER";
        token.tier = normalizeTier((user as any).tier); // ← y aquí
      }
      return token;
    },
    async session({ session, token }) {
      (session as any).role = (token as any).role || "USER";
      (session as any).tier = normalizeTier((token as any).tier); // ← y aquí
      return session;
    },
  },
});
