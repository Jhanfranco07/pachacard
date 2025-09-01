// app/admin/layout.tsx
import AdminHeader from "@/app/_components/AdminHeader";

export const metadata = {
  title: "Admin · PACHACARD",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminHeader />
      <main className="container-app py-6">{children}</main>
    </>
  );
}
