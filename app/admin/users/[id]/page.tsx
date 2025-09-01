import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";
import UserForm from "./ui";

export default async function UserEditPage({ params }: { params: { id: string } }) {
  const session = await auth();
  if (!session?.user || (session as any).role !== "ADMIN") redirect("/");

  const item = await prisma.user.findUnique({ where: { id: params.id } });
  if (!item) return notFound();

  return (
    <div className="container-app py-6 max-w-xl">
      <UserForm item={item} />
    </div>
  );
}
