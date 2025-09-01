"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";

export default function LogoutPage() {
  useEffect(() => {
    // NextAuth envía el CSRF por ti y hace el POST correcto
    signOut({ callbackUrl: "/login", redirect: true });
  }, []);

  return <p className="p-4 text-sm text-slate-500">Cerrando sesión…</p>;
}
