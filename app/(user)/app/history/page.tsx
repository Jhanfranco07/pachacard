import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

// ✅ importa los tipos de Prisma
import type { Redemption, Discount, Business } from "@prisma/client";

// ✅ unifica el tipo de cada fila que trae include:{ discount, business }
type Row = Redemption & { discount: Discount | null; business: Business | null };

export default async function HistoryPage(){
  const session = await auth();
  if(!session?.user) redirect("/login");

  const user = await prisma.user.findUnique({ where: { email: String(session.user.email) } });
  if(!user) redirect("/login");

  // ✅ anota el tipo del array
  const reds: Row[] = await prisma.redemption.findMany({
    where: { userId: user.id },
    orderBy: { redeemedAt: "desc" },
    include: { discount: true, business: true }
  });

  return (
    <div className="container-app py-6">
      <h1 className="text-2xl font-semibold mb-4">Mi historial</h1>

      {reds.length === 0 && (
        <div className="card text-sm text-gray-600">Aún no hay canjes.</div>
      )}

      {reds.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border rounded-xl overflow-hidden bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-medium">Fecha</th>
                <th className="px-3 py-2 text-left font-medium">Descuento</th>
                <th className="px-3 py-2 text-left font-medium">Negocio</th>
                <th className="px-3 py-2 text-left font-medium">Código</th>
              </tr>
            </thead>
            <tbody>
              {/* ✅ ahora TypeScript conoce el tipo de r */}
              {reds.map((r: Row) => (
                <tr key={r.id} className="border-t">
                  <td className="px-3 py-2">{new Date(r.redeemedAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{r.discount?.title ?? "—"}</td>
                  <td className="px-3 py-2">{r.business?.name ?? "—"}</td>
                  <td className="px-3 py-2 font-mono">{r.discount?.code ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
