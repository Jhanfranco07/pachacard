// app/admin/businesses/new/page.tsx
import BusinessForm from "../ui";

export const dynamic = "force-dynamic";

export default function NewBusinessPage() {
  // Form vacío (crear)
  return <BusinessForm item={null} />;
}
