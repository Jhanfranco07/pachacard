// app/admin/discounts/[id]/page.tsx
import { prisma } from "@/lib/prisma";
import DiscountForm from "../ui";

export const dynamic = "force-dynamic";

export default async function EditDiscountPage({
  params,
}: {
  params: { id: string };
}) {
  const [item, businesses] = await Promise.all([
    prisma.discount.findUnique({
      where: { id: params.id },
    }),
    prisma.business.findMany({
      select: { id: true, name: true, code: true },
      orderBy: { name: "asc" },
    }),
  ]);

  if (!item) {
    return <div className="text-sm text-slate-600">No encontrado.</div>;
  }

  // Form con datos (editar)
  return <DiscountForm item={item} businesses={businesses} />;
}
