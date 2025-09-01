// app/admin/discounts/new/page.tsx
import { prisma } from "@/lib/prisma";
import DiscountForm from "../ui";

export default async function Page() {
  const businesses = await prisma.business.findMany({
    select: { id: true, name: true, code: true },
    orderBy: { name: "asc" },
  });

  return <DiscountForm businesses={businesses} />;
}
