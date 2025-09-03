// app/(user)/app/negocios/page.tsx
import { getBusinesses, getCategoriesWithCounts } from "@/lib/db";
import CategoryPills from "@/app/_components/CategoryPills";
import BusinessCard from "@/app/_components/BusinessCard";

export const dynamic = "force-dynamic";

type Props = { searchParams?: { cat?: string } };

export default async function NegociosPage({ searchParams }: Props) {
  const current = searchParams?.cat || undefined;

  const [cats, businesses] = await Promise.all([
    getCategoriesWithCounts(),
    getBusinesses({ categorySlug: current }),
  ]);

  return (
    <div className="container-app py-6 md:py-8">
      <CategoryPills
        categories={cats}
        currentSlug={current}
        baseHref="/app/businesses"
        showAllPill
      />

      <h1 className="text-2xl font-semibold mt-4">Negocios</h1>

      {businesses.length === 0 ? (
        <div className="mt-6 text-sm text-slate-500">
          No hay negocios para esta categoría.
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {businesses.map((b) => (
            <BusinessCard key={b.id} business={b as any} />
          ))}
        </div>
      )}
    </div>
  );
}
