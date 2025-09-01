"use client";
import { useEffect, useState } from "react";

export default function Redemptions(){
  const [items,setItems]=useState<any[]>([]);
  const [f,setF]=useState<any>({ from:"", to:"", businessCode:"", discountCode:"", userEmail:"" });
  async function load(){
    const params=new URLSearchParams(); Object.entries(f).forEach(([k,v])=>{ if(v) params.set(k,String(v)); });
    const r=await fetch(`/api/admin/redemptions?`+params.toString()); const j=await r.json(); if(j.ok) setItems(j.items);
  }
  useEffect(()=>{ load(); },[]);
  function exportCsv(){
    const params=new URLSearchParams(); Object.entries(f).forEach(([k,v])=>{ if(v) params.set(k,String(v)); }); params.set("export","csv");
    location.href="/api/admin/redemptions?"+params.toString();
  }
  return (<div className="grid gap-4">
    <h2 className="text-xl font-semibold">Canjes (Auditoría)</h2>
    <div className="card"><div className="card-body grid md:grid-cols-5 gap-3">
      <div><label className="label">Desde</label><input className="input" type="datetime-local" value={f.from} onChange={e=>setF({...f,from:e.target.value})}/></div>
      <div><label className="label">Hasta</label><input className="input" type="datetime-local" value={f.to} onChange={e=>setF({...f,to:e.target.value})}/></div>
      <div><label className="label">Negocio (code)</label><input className="input" value={f.businessCode} onChange={e=>setF({...f,businessCode:e.target.value.toUpperCase()})}/></div>
      <div><label className="label">Descuento (code)</label><input className="input" value={f.discountCode} onChange={e=>setF({...f,discountCode:e.target.value.toUpperCase()})}/></div>
      <div><label className="label">Usuario (email)</label><input className="input" value={f.userEmail} onChange={e=>setF({...f,userEmail:e.target.value})}/></div>
      <div className="md:col-span-5 flex gap-3"><button className="btn btn-primary" onClick={load}>Filtrar</button><button className="btn btn-outline" onClick={exportCsv}>Exportar CSV</button></div>
    </div></div>
    <div className="card"><div className="card-body">
      <div className="grid gap-2">
        {items.map(r=>(
          <div key={r.id} className="text-sm flex items-center justify-between border-b last:border-none pb-2">
            <div>
              <div className="font-medium">{r.discount.title} <span className="text-slate-500">({r.discount.code})</span></div>
              <div className="text-slate-500">Usuario: {r.user.email} · Tier {r.user.tier} · Negocio {r.business.code} · {new Date(r.redeemedAt).toLocaleString()}</div>
            </div>
            <span className="badge badge-green">ok</span>
          </div>
        ))}
        {items.length===0 && <div className="text-sm text-slate-600">No hay registros.</div>}
      </div>
    </div></div>
  </div>);
}
