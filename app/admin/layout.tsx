// app/admin/layout.tsx
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminHeader from "@/app/_components/AdminHeader";

export const metadata = {
  title: "Admin · PACHACARD",
};

// ⬇️ Server Component con guard de rol
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();               // lee sesión en el servidor
  const role = (session as any)?.role ?? "USER";

  // si no está logueado o no es ADMIN → fuera
  if (role !== "ADMIN") {
    redirect("/login?callbackUrl=/admin");
  }

  return (
    <>
      <AdminHeader />
      <main className="container-app py-6">{children}</main>
    </>
  );
}
