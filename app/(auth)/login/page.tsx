// app/(auth)/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

/** Íconos inline (sin dependencias) */
function Eye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"
      />
      <circle cx="12" cy="12" r="3" strokeWidth="2" />
    </svg>
  );
}
function EyeOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3l18 18M10.585 10.585a3 3 0 104.243 4.243M9.88 4.77A8.968 8.968 0 0112 4c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-3.143 4.5M6.61 6.61A9.956 9.956 0 004.458 12c1.274 4.057 5.065 7 9.542 7 1.287 0 2.522-.233 3.656-.66"
      />
    </svg>
  );
}

export default function LoginPage() {
  const search = useSearchParams();
  const errParam = search?.get("error");
  // Ocultamos errores esperables (p.ej., al salir)
  const shouldShowError =
    errParam && errParam !== "MissingCSRF" && errParam !== "SessionRequired";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      // 👇 fuerza a que NextAuth emita y fije el cookie del CSRF para este host
      await fetch("/api/auth/csrf", { cache: "no-store" });

      await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/", // tu middleware ya decide /app o /admin
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="
        min-h-[calc(100vh-56px)]
        bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(255,255,255,.15),transparent_60%),linear-gradient(180deg,rgba(255,255,255,.1),transparent_30%)]
      "
    >
      <div className="container-app py-10 md:py-16 grid place-content-center">
        <div className="mx-auto w-full max-w-lg">
          {/* Marca arriba (más grande) */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="/pachacard.png"
              alt="PACHACARD"
              className="h-12 w-auto drop-shadow"
              onError={(e) => ((e.currentTarget.style.display = "none"))}
            />
            <div className="text-[12px] text-white/90">
              Municipalidad de Pachacámac
            </div>
          </div>

          {/* Card tipo glass */}
          <div
            className="
              rounded-2xl border border-white/30 bg-white/90 backdrop-blur
              shadow-[0_8px_30px_rgba(0,0,0,.08)]
              transition-all
            "
          >
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                  Iniciar sesión
                </h1>
                <p className="mt-1 text-slate-500 text-sm">
                  Acceso exclusivo para titulares de <b>PACHACARD</b>.
                </p>
              </div>

              {shouldShowError && (
                <div className="mb-5 rounded-lg border border-rose-200 bg-rose-50/90 px-4 py-3 text-sm text-rose-700">
                  No pudimos iniciar sesión. Verifica tus datos e inténtalo otra
                  vez.
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="username"
                    placeholder="tucorreo@pachacard.pe"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      w-full rounded-lg border px-3 py-2.5
                      text-[15px]
                      outline-none
                      focus:ring-2 focus:ring-[var(--brand)]/60
                      focus:border-[var(--brand)]/60
                    "
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={show ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="
                        w-full rounded-lg border px-3 py-2.5 pr-12
                        text-[15px]
                        outline-none
                        focus:ring-2 focus:ring-[var(--brand)]/60
                        focus:border-[var(--brand)]/60
                      "
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShow((v) => !v)}
                      aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
                      className="
                        absolute inset-y-0 right-2 my-1.5
                        inline-flex items-center justify-center
                        w-9 rounded-md border
                        text-slate-600/80 hover:text-slate-800
                        bg-white/70 hover:bg-white
                      "
                    >
                      {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="
                    w-full rounded-lg bg-[var(--brand)] text-white font-medium
                    py-2.5
                    shadow-sm hover:shadow
                    transition active:scale-[.995]
                    disabled:opacity-70
                  "
                >
                  {submitting ? "Ingresando…" : "Entrar"}
                </button>
              </form>

              {/* Ayuda elegante */}
              <div className="mt-6 rounded-lg border bg-slate-50 px-4 py-3 text-[13px] text-slate-600">
                <div className="font-medium text-slate-700 mb-1.5">
                  ¿Necesitas ayuda?
                </div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Tu contraseña será entregada por la Municipalidad al momento
                    de recibir tu tarjeta <b>PACHACARD</b>.
                  </li>
                  <li>
                    Si la olvidaste, comunícate con el servicio de atención para
                    solicitar el cambio de contraseña.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-white/80 mt-4">
            © 2025 Municipalidad de Pachacámac · PACHACARD
          </div>
        </div>
      </div>
    </div>
  );
}
