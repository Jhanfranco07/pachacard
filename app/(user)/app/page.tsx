// app/(user)/app/page.tsx
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Page() {
  const session = await auth();
  if (!session?.user) {
    return (
      <div className="text-sm text-slate-500">
        Inicia sesión para ver tus descuentos.
      </div>
    );
  }

  // Usuario y tier
  const user = await prisma.user.findUnique({
    where: { id: String(session.user.id) },
  });
  const tier = user?.tier ?? "BASIC";
  const now = new Date();

  // Filtro por tier (1 flag)
  const tierWhere =
    tier === "BASIC"
      ? { tierBasic: true }
      : tier === "NORMAL"
      ? { tierNormal: true }
      : { tierPremium: true };

  // Descuentos vigentes y publicados del tier del usuario
  let discounts = await prisma.discount.findMany({
    where: {
      status: "PUBLISHED",
      startAt: { lte: now },
      endAt: { gte: now },
      ...tierWhere,
    },
    orderBy: { startAt: "asc" },
    include: { business: true },
  });

  // Ordenar: los agotados al final
  discounts.sort((a, b) => {
    const soldA = a.limitTotal ? a.usedTotal >= a.limitTotal : false;
    const soldB = b.limitTotal ? b.usedTotal >= b.limitTotal : false;
    if (soldA !== soldB) return soldA ? 1 : -1; // agotados van al final
    return a.startAt.getTime() - b.startAt.getTime();
  });

  // Estado para chip derecho (sin conteo por usuario)
  function getStatus(d: (typeof discounts)[number]) {
    const agotadoTotal = d.limitTotal ? d.usedTotal >= d.limitTotal : false;

    if (agotadoTotal) {
      return {
        text: "agotado",
        cls: "bg-rose-100 text-rose-700 border border-rose-200",
        isSoldOut: true,
      };
    }
    return {
      text: "disponible",
      cls: "bg-emerald-100 text-emerald-700 border border-emerald-200",
      isSoldOut: false,
    };
  }

  // Badges de nuevo / expira pronto
  const MS_DAY = 24 * 60 * 60 * 1000;
  const isNew = (d: (typeof discounts)[number]) =>
    now.getTime() - d.startAt.getTime() <= 7 * MS_DAY;
  const expiringSoon = (d: (typeof discounts)[number]) =>
    d.endAt.getTime() - now.getTime() <= 3 * MS_DAY &&
    d.endAt.getTime() >= now.getTime();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Mis Descuentos</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {discounts.map((d) => {
          const status = getStatus(d);

          // Soporta URL externa y ruta local
          const src = d.business?.imageUrl ?? "";
          const isExternal = /^https?:\/\//i.test(src);

          return (
            <div
              key={d.id}
              className={`group card hover:shadow-md transition border hover:border-[var(--brand)]/70`}
            >
              {/* Imagen + chips */}
              <div
                className={`relative h-44 md:h-48 w-full rounded-t-2xl overflow-hidden bg-white border-b ${
                  status.isSoldOut ? "grayscale opacity-90" : ""
                }`}
              >
                {src ? (
                  isExternal ? (
                    <img
                      src={src}
                      alt={d.business?.name ?? "Negocio"}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <Image
                      src={src}
                      alt={d.business?.name ?? "Negocio"}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )
                ) : (
                  <div className="w-full h-full grid place-content-center text-slate-400">
                    Sin imagen
                  </div>
                )}

                {/* Izquierda: badges (solo si NO está agotado) */}
                <div className="absolute top-2 left-2 flex gap-2">
                  {!status.isSoldOut && isNew(d) && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium shadow-sm bg-sky-100 text-sky-700 border border-sky-200">
                      nuevo
                    </span>
                  )}
                  {!status.isSoldOut && expiringSoon(d) && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium shadow-sm bg-amber-100 text-amber-700 border border-amber-200">
                      pronto expira
                    </span>
                  )}
                </div>

                {/* Derecha: estado */}
                <span
                  className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-medium shadow-sm ${status.cls}`}
                >
                  {status.text}
                </span>
              </div>

              <div className="card-body">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold leading-tight">{d.title}</h3>
                    {d.description && (
                      <p className="text-sm text-slate-600 line-clamp-2">
                        {d.description}
                      </p>
                    )}
                  </div>
                  <span className="badge">{d.code}</span>
                </div>

                {/* Negocio */}
                <p className="text-xs text-slate-500 mt-1">
                  {d.business?.name ? `Negocio: ${d.business.name}` : "—"}
                </p>

                <a
                  href={`/app/discounts/${d.id}`}
                  className="btn btn-secondary mt-3"
                >
                  Ver detalle
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
