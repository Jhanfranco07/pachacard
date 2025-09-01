// app/admin/discounts/new/page.tsx
import { prisma } from "@/lib/prisma";
import DiscountForm from "../ui";

export const dynamic = "force-dynamic";

export default async function NewDiscountPage() {
  const businesses = await prisma.business.findMany({
    select: { id: true, name: true, code: true },
    orderBy: { name: "asc" },
  });

  // Form vacío (crear)
  return <DiscountForm businesses={businesses} />;
}
