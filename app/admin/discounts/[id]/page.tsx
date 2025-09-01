// app/admin/discounts/[id]/page.tsx
import { prisma } from "@/lib/prisma";
import DiscountForm from "../ui";

export default async function Page({ params }: { params: { id: string } }) {
  const item = await prisma.discount.findUnique({ where: { id: params.id } });
  if (!item) return <div>No encontrado</div>;

  const businesses = await prisma.business.findMany({
    select: { id: true, name: true, code: true },
    orderBy: { name: "asc" },
  });

  return (
    <DiscountForm
      item={{ ...item, businessId: item.businessId ?? null }}
      businesses={businesses}
    />
  );
}
