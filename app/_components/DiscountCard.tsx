// app/_components/DiscountCard.tsx
import Image from "next/image";

export default function DiscountCard({ discount }: { discount: any }) {
  const d = discount;

  const now = new Date();
  const MS_DAY = 24 * 60 * 60 * 1000;
  
  const isNew = d?.startAt ? (now.getTime() - new Date(d.startAt).getTime() <= 7 * MS_DAY) : false;
  const expiringSoon =
    d?.endAt
      ? (new Date(d.endAt).getTime() - now.getTime() <= 3 * MS_DAY &&
         new Date(d.endAt).getTime() >= now.getTime())
      : false;

  const soldOut = d?.limitTotal ? d.usedTotal >= d.limitTotal : false;

  const status = soldOut
    ? { text: "agotado", cls: "bg-rose-100 text-rose-700 border border-rose-200" }
    : { text: "disponible", cls: "bg-emerald-100 text-emerald-700 border border-emerald-200" };

  // Hero: usa logo del negocio si existe (o la primera imagen del descuento)
    const hero =
      (Array.isArray(d?.images) ? d.images[0] : d?.images) ||
      d?.business?.imageUrl ||
      "";

    const isExternal = /^https?:\/\//i.test(hero);
  
  return (
    <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-sm hover:shadow-md hover:ring-[var(--brand)]/40 transition">
      {/* Imagen */}
      <div
        className={[
          "relative h-44 w-full border-b bg-white",
          soldOut ? "grayscale opacity-90" : ""
        ].join(" ")}
      >
        {hero ? (
          isExternal ? (
            <img src={hero} alt={d?.business?.name ?? "Negocio"} className="h-full w-full object-contain p-3" />
          ) : (
            <Image src={hero} alt={d?.business?.name ?? "Negocio"} fill className="object-contain p-3" sizes="(max-width:768px) 100vw, 33vw" />
          )
        ) : (
          <div className="grid h-full w-full place-content-center text-slate-400">
            Sin imagen
          </div>
        )}

        {/* Badges izq */}
        <div className="absolute left-3 top-3 flex gap-2">
          {!soldOut && isNew && (
            <span className="rounded-full border border-sky-200 bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700 shadow-sm">
              nuevo
            </span>
          )}
          {!soldOut && expiringSoon && (
            <span className="rounded-full border border-amber-200 bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 shadow-sm">
              pronto expira
            </span>
          )}
        </div>

        {/* Estado der */}
        <span className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-xs font-medium shadow-sm ${status.cls}`}>
          {status.text}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="line-clamp-2 font-semibold leading-tight text-slate-900">
              {d?.title ?? "Descuento"}
            </h3>
            {d?.description && (
              <p className="mt-1 line-clamp-2 text-sm text-slate-600">
                {d.description}
              </p>
            )}
          </div>

          {/* Código a la derecha */}
          {d?.code && (
            <span className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700">
              {d.code}
            </span>
          )}
        </div>

        {/* Negocio */}
        <p className="mt-2 text-xs text-slate-500">
          {d?.business?.name ? `Negocio: ${d.business.name}` : "—"}
        </p>

        <a
          href={`/app/discounts/${d.id}`}
          className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-b from-[#9a1e1e] to-[#7e1515] px-4 py-2.5 text-sm font-medium text-white shadow-[0_6px_20px_rgba(0,0,0,.20)] transition hover:shadow-[0_10px_28px_rgba(0,0,0,.25)]"
        >
          Ver detalle
        </a>
      </div>
    </div>
  );
}
