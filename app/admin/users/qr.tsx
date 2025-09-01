"use client";
import { useState } from "react";
import QRCode from "qrcode";

export default function QR({ userId }:{ userId:string }){
  const [open,setOpen]=useState(false);
  const [png,setPng]=useState<string|null>(null);

  async function load(){
    const r=await fetch(`/api/qr/token/${userId}`); const j=await r.json();
    if(j.ok){
      const url = `${location.origin}/redeem?token=${encodeURIComponent(j.token)}`;
      const data = await QRCode.toDataURL(url, { margin:1, width: 240 });
      setPng(data); setOpen(true);
    }
  }
  return (<>
    <button className="btn btn-primary" onClick={load}>Ver QR</button>
    {open && (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center" onClick={()=>setOpen(false)}>
        <div className="card" onClick={e=>e.stopPropagation()}>
          <div className="card-body text-center">
            <h3 className="card-title mb-2">QR del usuario</h3>
            {png && <img src={png} alt="QR" className="mx-auto" />}
            <p className="text-xs text-slate-500 mt-2">Escanéalo para abrir el canje.</p>
            <button className="btn btn-ghost mt-3" onClick={()=>setOpen(false)}>Cerrar</button>
          </div>
        </div>
      </div>
    )}
  </>);
}
