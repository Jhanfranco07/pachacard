"use client";

import { useRef, useState } from "react";

// Exportamos el tipo para poder usarlo en la página (y en otras partes si quieres)
export type Biz = {
  id?: string;
  code: string;
  name: string;
  ruc?: string | null;
  address?: string | null;
  contact?: string | null;
  status: "ACTIVE" | "INACTIVE";
  imageUrl?: string | null;
};

export default function BusinessForm({ item }: { item?: Partial<Biz> | null }) {
  const [f, setF] = useState<Biz>({
    id: item?.id,
    code: item?.code ?? "",
    name: item?.name ?? "",
    ruc: item?.ruc ?? "",
    address: item?.address ?? "",
    contact: item?.contact ?? "",
    status: (item?.status as any) ?? "ACTIVE",
    imageUrl: item?.imageUrl ?? "",
  });

  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);

  function sanitizeCode(v: string) {
    // Solo mayúsculas, sin espacios
    return v.replace(/\s+/g, "").toUpperCase();
  }

  async function save() {
    setSaving(true);
    try {
      const isNew = !f.id;
      const url = isNew
        ? "/api/admin/businesses"
        : `/api/admin/businesses/${f.id}`;
      const method = isNew ? "POST" : "PUT";

      // Validaciones rápidas
      if (!f.code.trim() || !f.name.trim()) {
        alert("Código y Nombre son obligatorios.");
        setSaving(false);
        return;
      }

      const body = {
        ...f,
        code: sanitizeCode(f.code),
        ruc: f.ruc?.trim() || null,
        address: f.address?.trim() || null,
        contact: f.contact?.trim() || null,
        imageUrl: f.imageUrl?.trim() || null,
      };

      const r = await fetch(url, {
        method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      if (r.ok) location.href = "/admin/businesses";
      else {
        const t = await r.text().catch(() => "");
        alert("Error al guardar. " + (t || ""));
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Solo se permiten imágenes.");
      return;
    }
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const json = await res.json();
      if (json.ok) {
        setF((p) => ({ ...p, imageUrl: json.url }));
      } else {
        alert(json.error || "Error al subir la imagen");
      }
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div className="max-w-3xl">
      <div className="card">
        {/* ÚNICO botón guardar abajo (nada en el header) */}
        <form
          className="card-body space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!saving) save();
          }}
        >
          <h2 className="card-title">
            {f.id ? "Editar negocio" : "Nuevo negocio"}
          </h2>

          {/* Código + Nombre */}
          <div className="form-grid">
            <div>
              <label className="label">Código (único)</label>
              <input
                className="input"
                placeholder="EJ: CAFE"
                value={f.code}
                onChange={(e) => setF({ ...f, code: e.target.value })}
                onBlur={(e) => setF({ ...f, code: sanitizeCode(e.target.value) })}
                required
              />
              <p className="help">
                Usado en canje. Solo mayúsculas, sin espacios.
              </p>
            </div>
            <div>
              <label className="label">Nombre</label>
              <input
                className="input"
                placeholder="Café Central"
                value={f.name}
                onChange={(e) => setF({ ...f, name: e.target.value })}
                required
              />
            </div>
          </div>

          {/* RUC + Contacto */}
          <div className="form-grid">
            <div>
              <label className="label">RUC</label>
              <input
                className="input"
                placeholder="10012345678"
                value={f.ruc ?? ""}
                onChange={(e) => setF({ ...f, ruc: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Contacto</label>
              <input
                className="input"
                placeholder="+51 999 888 777"
                value={f.contact ?? ""}
                onChange={(e) => setF({ ...f, contact: e.target.value })}
              />
            </div>
          </div>

          {/* Dirección */}
          <div>
            <label className="label">Dirección</label>
            <input
              className="input"
              placeholder="Av. Principal 123 (opcional)"
              value={f.address ?? ""}
              onChange={(e) => setF({ ...f, address: e.target.value })}
            />
            <p className="help">
              Se muestra de referencia en el detalle del negocio.
            </p>
          </div>

          {/* Logo: URL + subida */}
          <div className="form-grid">
            <div>
              <label className="label">URL Logo del negocio</label>
              <div className="flex items-center gap-3">
                <input
                  className="input flex-1"
                  placeholder="https://... o /uploads/archivo.jpg"
                  value={f.imageUrl ?? ""}
                  onChange={(e) => setF({ ...f, imageUrl: e.target.value })}
                />
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </div>
              <p className="help">
                Puedes pegar una URL externa o subir un archivo. Si subes, se
                guardará en <code>/uploads</code>.
              </p>
            </div>

            <div>
              <label className="label">Previsualización</label>
              {f.imageUrl ? (
                <>
                  <img
                    src={f.imageUrl}
                    alt="preview"
                    className="h-12 w-12 rounded-xl object-cover border"
                  />
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setF({ ...f, imageUrl: "" })}
                    >
                      Quitar
                    </button>
                    {uploading && (
                      <span className="text-xs text-slate-500">Subiendo…</span>
                    )}
                  </div>
                </>
              ) : (
                <div className="h-12 w-12 rounded-xl bg-slate-200 grid place-content-center text-xs text-slate-500">
                  sin img
                </div>
              )}
            </div>
          </div>

          {/* Estado */}
          <div className="form-grid">
            <div>
              <label className="label">Estado</label>
              <select
                className="select"
                value={f.status}
                onChange={(e) =>
                  setF({ ...f, status: e.target.value as Biz["status"] })
                }
              >
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </select>
            </div>
          </div>

          {/* Único botón Guardar */}
          <div className="pt-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={saving || uploading}
            >
              {saving ? "Guardando..." : "Guardar"}
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}
