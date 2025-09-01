// app/admin/discounts/page.tsx
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDiscountsList() {
  const items = await prisma.discount.findMany({
    include: { business: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Descuentos</h2>
        <a className="btn btn-primary" href="/admin/discounts/new">
          Nuevo
        </a>
      </div>

      <div className="grid gap-3">
        {items.map((d) => (
          <a
            key={d.id}
            className="card hover:shadow-lg transition"
            href={`/admin/discounts/${d.id}`}
          >
            <div className="card-body flex items-center justify-between">
              <div>
                <div className="font-semibold">{d.title}</div>
                <div className="text-xs text-slate-500">
                  {d.code} · {d.business?.name ?? "—"}
                </div>
              </div>
              <span className="badge">{d.status}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
