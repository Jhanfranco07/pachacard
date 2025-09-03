"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

/**
 * Header con estilo moderno:
 * - Gradiente y blur al hacer scroll
 * - Links con underline animado
 * - Menú móvil con slide-down
 */
export default function PachaHeader() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  // Rutas donde NO debe existir NINGÚN header
  const hideAll =
    pathname === "/login" ||
    pathname === "/logout" ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/redeem");

  useEffect(() => {
    if (hideAll) return;
    const onScroll = () => setElevated(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideAll]);

  // Cierra el drawer al navegar
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (hideAll) return null;

  function isActive(href: string) {
    if (href === "/app") return pathname === "/app" || pathname.startsWith("/app/");
    return pathname.startsWith(href);
  }

  async function doSignOut() {
    // ayuda a evitar MissingCSRF en algunos entornos
    await fetch("/api/auth/csrf", { cache: "no-store" }).catch(() => {});
    await signOut({ callbackUrl: "/login" });
  }

  const links = useMemo(
    () => [
      { href: "/app", label: "Mis descuentos" },
      { href: "/app/businesses", label: "Negocios" }, // listado público /negocios
      { href: "/app/me", label: "Mi información (QR)" },
      { href: "/app/history", label: "Historial" },
    ],
    []
  );

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-all",
        "backdrop-blur supports-[backdrop-filter]:bg-transparent",
        elevated
          ? "bg-gradient-to-b from-[var(--brand)] to-[#6f1414] shadow-[0_2px_12px_rgba(0,0,0,.18)]"
          : "bg-gradient-to-b from-[var(--brand)] to-[#7f1616]",
      ].join(" ")}
      role="banner"
    >
      {/* Cinta superior */}
      <div className="container-app h-14 flex items-center justify-between gap-4">
        {/* Marca */}
        <a
          href="/app"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
          aria-label="Ir al inicio"
        >
          <img
            src="/pachacard.png"
            alt=""
            className="hidden sm:block h-7 w-auto transition-transform group-hover:scale-[1.02]"
            onError={(e) => ((e.currentTarget.style.display = "none"))}
          />
          <div className="leading-none text-white">
            <div className="font-semibold tracking-wide">PACHACARD</div>
            <div className="text-[11px] opacity-80">
              Municipalidad de Pachacámac
            </div>
          </div>
        </a>

        {/* Navegación desktop */}
        <nav className="hidden md:block" aria-label="Principal">
          <ul className="flex items-center gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-active={isActive(l.href) ? "true" : "false"}
                  className={[
                    "relative px-3 py-2 rounded-lg text-sm",
                    "text-white/90 hover:text-white transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                    "group",
                    isActive(l.href)
                      ? "bg-white/15 shadow-inner"
                      : "hover:bg-white/10",
                  ].join(" ")}
                >
                  {l.label}
                  {/* subrayado animado */}
                  <span
                    className={[
                      "pointer-events-none absolute left-2 right-2 -bottom-[2px] h-[2px] rounded-full",
                      "bg-white/70 origin-left scale-x-0 transition-transform duration-300",
                      "group-hover:scale-x-100",
                      isActive(l.href) ? "scale-x-100" : "",
                    ].join(" ")}
                    aria-hidden
                  />
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={doSignOut}
                className="px-3 py-2 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-label="Cerrar sesión"
              >
                Salir
              </button>
            </li>
          </ul>
        </nav>

        {/* Botón mobile */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={[
              "block h-4 w-5 relative",
              "before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-white before:transition-transform",
              "after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-white after:transition-transform",
              "bg-white/0",
              open ? "before:translate-y-2 before:rotate-45 after:-translate-y-2 after:-rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Drawer mobile */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden transition-[max-height,transform] duration-300",
          open ? "max-h-80" : "max-h-0",
          "border-t border-white/10",
        ].join(" ")}
      >
        <nav aria-label="Menú móvil" className="bg-[var(--brand)]/95 backdrop-blur">
          <ul className="container-app py-2 flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-active={isActive(l.href) ? "true" : "false"}
                  className={[
                    "block px-3 py-2 rounded-md text-sm transition",
                    "text-white/90 hover:text-white hover:bg-white/10",
                    isActive(l.href) ? "bg-white/15" : "",
                  ].join(" ")}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <button
                onClick={doSignOut}
                className="w-full text-left px-3 py-2 rounded-md text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
              >
                Salir
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
