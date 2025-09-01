// app/admin/discounts/ui.tsx
"use client";

import { useState } from "react";
import type { Discount, Business } from "@prisma/client";

type Props = {
  item?: Discount | null;
  businesses: Pick<Business, "id" | "name" | "code">[];
};

// Solo para el selector
type Tier = "BASIC" | "NORMAL" | "PREMIUM";

export default function DiscountForm({ item, businesses }: Props) {
  const isEdit = !!item?.id;

  // Deduces el tier inicial desde los 3 flags del item
  const initialTier: Tier =
    item?.tierBasic ? "BASIC" : item?.tierNormal ? "NORMAL" : item?.tierPremium ? "PREMIUM" : "BASIC";

  // Estado del form (sin los booleanos de tier)
  const [tier, setTier] = useState<Tier>(initialTier);
  const [f, setF] = useState({
    code: item?.code ?? "",
    status: item?.status ?? "DRAFT",
    title: item?.title ?? "",
    description: item?.description ?? "",
    startAt: (item?.startAt ? new Date(item.startAt) : new Date())
      .toISOString()
      .slice(0, 16),
    endAt: (item?.endAt
      ? new Date(item.endAt)
      : new Date(Date.now() + 24 * 60 * 60 * 1000))
      .toISOString()
      .slice(0, 16),
    limitPerUser: item?.limitPerUser ?? "",
    limitTotal: item?.limitTotal ?? "",
    businessId: (item as any)?.businessId ?? "",
  });

  async function save() {
    // Mapeo: de selector único → booleans
    const body = {
      ...f,
      limitPerUser: f.limitPerUser === "" ? null : Number(f.limitPerUser),
      limitTotal: f.limitTotal === "" ? null : Number(f.limitTotal),
      tierBasic: tier === "BASIC",
      tierNormal: tier === "NORMAL",
      tierPremium: tier === "PREMIUM",
    };

    const url = isEdit ? `/api/admin/discounts/${item!.id}` : `/api/admin/discounts`;
    const method = isEdit ? "PUT" : "POST";

    const r = await fetch(url, {
      method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

    if (r.ok) {
      if (isEdit) alert("Guardado");
      else location.href = "/admin/discounts";
    }
  }

  async function removeItem() {
    if (!isEdit) return;
    if (!confirm("¿Eliminar descuento?")) return;
    const r = await fetch(`/api/admin/discounts/${item!.id}`, { method: "DELETE" });
    if (r.ok) location.href = "/admin/discounts";
  }

  return (
    <div className="max-w-2xl">
      <div className="card">
        <div className="card-body space-y-4">
          <h2 className="card-title">{isEdit ? "Editar descuento" : "Nuevo descuento"}</h2>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="label">Código (legible)</label>
              <input
                className="input"
                value={f.code}
                onChange={(e) => setF({ ...f, code: e.target.value.toUpperCase() })}
              />
            </div>
            <div>
              <label className="label">Estado</label>
              <select
                className="select"
                value={f.status}
                onChange={(e) => setF({ ...f, status: e.target.value })}
              >
                <option>DRAFT</option>
                <option>PUBLISHED</option>
                <option>ARCHIVED</option>
              </select>
            </div>
          </div>

          <div>
            <label className="label">Título</label>
            <input
              className="input"
              value={f.title}
              onChange={(e) => setF({ ...f, title: e.target.value })}
            />
          </div>

          <div>
            <label className="label">Descripción</label>
            <textarea
              className="input"
              value={f.description}
              onChange={(e) => setF({ ...f, description: e.target.value })}
            />
          </div>

          {/* Selector único de TIER */}
          <div>
            <label className="label">Tier</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="tier"
                  checked={tier === "BASIC"}
                  onChange={() => setTier("BASIC")}
                />
                Básico
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="tier"
                  checked={tier === "NORMAL"}
                  onChange={() => setTier("NORMAL")}
                />
                Normal
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="tier"
                  checked={tier === "PREMIUM"}
                  onChange={() => setTier("PREMIUM")}
                />
                Premium
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="label">Inicio</label>
              <input
                className="input"
                type="datetime-local"
                value={f.startAt}
                onChange={(e) => setF({ ...f, startAt: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Fin</label>
              <input
                className="input"
                type="datetime-local"
                value={f.endAt}
                onChange={(e) => setF({ ...f, endAt: e.target.value })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="label">Límite por usuario</label>
              <input
                className="input"
                type="number"
                value={f.limitPerUser ?? ""}
                onChange={(e) => setF({ ...f, limitPerUser: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Límite total</label>
              <input
                className="input"
                type="number"
                value={f.limitTotal ?? ""}
                onChange={(e) => setF({ ...f, limitTotal: e.target.value })}
              />
            </div>
          </div>

          {/* 1→N: cada descuento pertenece a 1 negocio */}
          <div>
            <label className="label">Negocio</label>
            <select
              className="select"
              value={f.businessId}
              onChange={(e) => setF({ ...f, businessId: e.target.value })}
            >
              <option value="">— sin negocio asignado —</option>
              {businesses.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name} ({b.code})
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3">
            <button className="btn btn-primary" onClick={save}>
              {isEdit ? "Guardar" : "Crear"}
            </button>
            {isEdit && (
              <button className="btn btn-danger" onClick={removeItem}>
                Eliminar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
