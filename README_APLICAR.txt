PATCH CONSOLIDADO: UI + Roles + date-fns v3 + imágenes negocio + QR
===================================================================

Copia estos archivos sobre tu proyecto (respeta rutas):
- app/globals.css
- app/layout.tsx
- app/page.tsx
- middleware.ts
- components/Providers.tsx
- components/SiteHeader.client.tsx
- lib/formatRange.ts
- lib/businessForDiscount.ts
- app/(user)/app/page.tsx
- app/(user)/app/discounts/[id]/page.tsx
- app/(user)/app/me/page.tsx
- app/(user)/app/history/page.tsx
- public/placeholder-business-wide.svg

NOTA sobre /login:
------------------
Debes tener **una sola** página de login. Si tienes dos (ej. `app/login/page.tsx`
y `app/(auth)/login/page.tsx`), elimina una para evitar conflicto de rutas.

Después de copiar:
------------------
pnpm dev
# o prod
pnpm build && pnpm start

Si compartirás en LAN, ajusta tu .env:
NEXTAUTH_URL="http://TU_IP:3000"
NEXT_PUBLIC_BASE_URL="http://TU_IP:3000"
