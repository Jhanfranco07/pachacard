// app/_components/CategoryPills.tsx
"use client";

import Link from "next/link";
import { useMemo } from "react";

type Cat = {
  id: string;
  slug: string;
  name: string;
  icon?: string | null;
  _count?: { discounts: number };
};

type Props = {
  categories: Cat[];
  /** slug activo; si no hay, se considera "Todas" */
  currentSlug?: string | null;
  /** página base donde colocar ?cat=...  (p.ej. "/app") */
  baseHref?: string;
  /** mostrar la píldora "Todas" */
  showAllPill?: boolean;
  /** icono para la píldora "Todas" */
  allIcon?: string;
  /** texto “Todas” */
  allLabel?: string;
};

export default function CategoryPills({
  categories,
  currentSlug,
  baseHref = "/app",
  showAllPill = true,
  allIcon = "/icons/cats/todas.png",
  allLabel = "Todos",
}: Props) {
  const items = useMemo(() => {
    const base: Array<{
      key: string;
      href: string;
      label: string;
      icon?: string | null;
      count?: number;
    }> = [];

    if (showAllPill) {
      base.push({
        key: "__all__",
        href: baseHref, // sin ?cat
        label: allLabel,
        icon: allIcon,
      });
    }

    for (const c of categories) {
      base.push({
        key: c.slug,
        href: `${baseHref}?cat=${encodeURIComponent(c.slug)}`,
        label: c.name,
        icon: c.icon ?? undefined,
        count: c._count?.discounts,
      });
    }
    return base;
  }, [categories, baseHref, showAllPill, allLabel, allIcon]);

  return (
    <div className="w-full">
      <div
        className="
          relative -mx-2 mb-4 flex gap-3 overflow-x-auto px-2 pb-2
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
        aria-label="Categorías"
      >
        {items.map((it) => {
          const isActive =
            (it.key === "__all__" && !currentSlug) ||
            (it.key !== "__all__" && it.key === currentSlug);

          return (
            <Pill
              key={it.key}
              href={it.href}
              label={it.label}
              icon={it.icon}
              count={it.count}
              active={isActive}
            />
          );
        })}
      </div>
    </div>
  );
}

function Pill({
  href,
  label,
  icon,
  count,
  active,
}: {
  href: string;
  label: string;
  icon?: string | null;
  count?: number;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "group relative flex w-[120px] shrink-0 select-none flex-col items-center justify-center",
        "rounded-xl border bg-white px-3 py-2 text-center shadow-sm transition",
        active
          ? "border-[var(--brand)] ring-1 ring-[var(--brand)]/30"
          : "border-slate-200 hover:border-[var(--brand)]/50 hover:shadow",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/50",
      ].join(" ")}
    >
      <div
        className={[
          "mb-2 grid h-10 w-10 place-content-center overflow-hidden rounded-full border",
          active
            ? "border-[var(--brand)] bg-[var(--brand)]/5"
            : "border-slate-200 bg-slate-50",
        ].join(" ")}
      >
        {icon ? (
          // img simple: soporta PNG/SVG públicos
          <img
            src={icon}
            alt={label}
            className="h-8 w-8 object-contain"
            onError={(e) => {
              // fallback: si falla el icono, ocultamos la imagen y mostramos iniciales
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const span = document.createElement("span");
                span.textContent = initials(label);
                span.className =
                  "text-[13px] font-semibold text-slate-600 uppercase";
                parent.appendChild(span);
              }
            }}
          />
        ) : (
          <span className="text-[13px] font-semibold text-slate-600 uppercase">
            {initials(label)}
          </span>
        )}
      </div>

      <div
        className={[
          "line-clamp-2 text-[12px] leading-tight",
          active ? "text-[var(--brand)] font-medium" : "text-slate-700",
        ].join(" ")}
      >
        {label}
      </div>

      {typeof count === "number" && (
        <span
          className={[
            "mt-1 rounded-full px-2 py-[2px] text-[11px]",
            active
              ? "bg-[var(--brand)]/10 text-[var(--brand)]"
              : "bg-slate-100 text-slate-700",
          ].join(" ")}
        >
          {count}
        </span>
      )}
    </Link>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (!parts.length) return "";
  const a = parts[0][0] || "";
  const b = parts[1]?.[0] || "";
  return (a + b).toUpperCase();
}
