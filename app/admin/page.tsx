import { prisma } from "@/lib/prisma";

export default async function AdminHome(){
  const [u,b,d,r] = await Promise.all([
    prisma.user.count(),
    prisma.business.count(),
    prisma.discount.count(),
    prisma.redemption.count()
  ]);
  return (
    <div className="grid gap-4">
      <h2 className="text-xl font-semibold">Panel de administración</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card"><div className="card-body"><div className="card-title">Usuarios</div><div className="text-2xl font-bold">{u}</div></div></div>
        <div className="card"><div className="card-body"><div className="card-title">Negocios</div><div className="text-2xl font-bold">{b}</div></div></div>
        <div className="card"><div className="card-body"><div className="card-title">Descuentos</div><div className="text-2xl font-bold">{d}</div></div></div>
        <div className="card"><div className="card-body"><div className="card-title">Canjes</div><div className="text-2xl font-bold">{r}</div></div></div>
      </div>
      <div className="flex gap-3">
        <a className="btn btn-primary" href="/admin/businesses">Negocios</a>
        <a className="btn btn-primary" href="/admin/discounts">Descuentos</a>
        <a className="btn btn-primary" href="/admin/redemptions">Redemptions</a>
        <a className="btn btn-primary" href="/admin/users">Usuarios</a>
      </div>
    </div>
  );
}
