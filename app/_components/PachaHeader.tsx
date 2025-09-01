// app/_components/PachaHeader.tsx
"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function PachaHeader() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // Rutas donde NO debe existir NINGÚN header
  const hideAll =
    pathname === "/login" ||
    pathname === "/logout" ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/redeem");

  if (hideAll) return null;

  // helper para links (marca activo)
  const link = (href: string, label: string) => {
    const active =
      href === "/app"
        ? pathname === "/app" || pathname.startsWith("/app/")
        : pathname.startsWith(href);

    return (
      <a
        href={href}
        className={`px-3 py-2 rounded-md text-sm transition ${
          active
            ? "bg-white/20 text-white font-medium"
            : "text-white/90 hover:bg-white/10 hover:text-white"
        }`}
        onClick={() => setOpen(false)}
      >
        {label}
      </a>
    );
  };

  async function doSignOut() {
    // ayuda a evitar el error MissingCSRF en algunos entornos
    await fetch("/api/auth/csrf", { cache: "no-store" }).catch(() => {});
    await signOut({ callbackUrl: "/login" });
  }

  return (
    <header className="sticky top-0 z-40 bg-[var(--brand)] text-white shadow-sm">
      <div className="container-app h-14 flex items-center justify-between gap-4">
        {/* Marca (clickeable) */}
        <a href="/app" className="flex items-center gap-3">
          <img
            src="/pachacard.png"
            alt=""
            className="hidden sm:block h-7 w-auto"
            onError={(e) => ((e.currentTarget.style.display = "none"))}
          />
          <div className="leading-none">
            <div className="font-semibold tracking-wide">PACHACARD</div>
            <div className="text-[11px] opacity-80">Municipalidad de Pachacámac</div>
          </div>
        </a>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {link("/app", "Mis descuentos")}
          {link("/app/me", "Mi información (QR)")}
          {link("/app/history", "Historial")}
          <button
            onClick={doSignOut}
            className="px-3 py-2 rounded-md text-sm text-white/90 hover:bg-white/10 hover:text-white transition"
          >
            Salir
          </button>
        </nav>

        {/* Botón mobile (abre drawer) */}
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-white/10"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-white/10 bg-[var(--brand)]/95 backdrop-blur"
        >
          <div className="container-app py-2 flex flex-col">
            {link("/app", "Mis descuentos")}
            {link("/app/me", "Mi información (QR)")}
            {link("/app/history", "Historial")}
            <button
              onClick={() => {
                setOpen(false);
                doSignOut();
              }}
              className="px-3 py-2 rounded-md text-sm text-white/90 hover:bg-white/10 hover:text-white transition text-left"
            >
              Salir
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
