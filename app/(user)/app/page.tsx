// app/(user)/app/page.tsx
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  getCategoriesWithCountsForUser,
  getDiscountsByCategorySlugForUser,
} from "@/lib/db";

import CategoryPills from "@/app/_components/CategoryPills";
import DiscountCard from "@/app/_components/DiscountCard";

export const dynamic = "force-dynamic";

type Tier = "BASIC" | "NORMAL" | "PREMIUM";
type Props = { searchParams?: { cat?: string } };

/** Intenta obtener el Tier desde la sesión; si faltara, hace fallbacks por id y luego por email */
async function resolveTier(session: any): Promise<Tier | undefined> {
  const fromSession = (session as any)?.tier as Tier | undefined;
  if (fromSession) return fromSession;

  const idFromSession =
    (session as any)?.user?.id ??
    (session as any)?.sub ??
    null;

  if (idFromSession) {
    const me = await prisma.user.findUnique({
      where: { id: String(idFromSession) },
      select: { tier: true },
    });
    if (me?.tier) return me.tier as Tier;
  }

  if (session?.user?.email) {
    const meByEmail = await prisma.user.findUnique({
      where: { email: session.user.email.toLowerCase() },
      select: { tier: true },
    });
    if (meByEmail?.tier) return meByEmail.tier as Tier;
  }

  return undefined;
}

export default async function Page({ searchParams }: Props) {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="text-sm text-slate-500">
        Inicia sesión para ver tus descuentos.
      </div>
    );
  }

  // 1) Resolvemos el tier del usuario de forma robusta
  const tier = await resolveTier(session);

  // 2) Filtro por categoría (?cat=slug)
  const current = searchParams?.cat || undefined;

  // 3) Píldoras + descuentos visibles para el usuario (según tier + categoría)
  const [cats, discounts] = await Promise.all([
    getCategoriesWithCountsForUser(tier),
    getDiscountsByCategorySlugForUser(current, tier),
  ]);

  return (
    <div className="container-app py-6 md:py-8">
      <CategoryPills
        categories={cats}
        currentSlug={current}
        baseHref="/app"
        showAllPill
        allIcon="/icons/cats/todas.png"
      />

      <h1 className="text-2xl font-semibold mt-4">Mis Descuentos</h1>

      {discounts.length === 0 ? (
        <div className="mt-6 text-sm text-slate-500">
          No hay descuentos para esta categoría.
        </div>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {discounts.map((d: any) => (
            <DiscountCard key={d.id} discount={d} />
          ))}
        </div>
      )}
    </div>
  );
}
