import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import path from "path";
import { promises as fs } from "fs";
export const runtime = "nodejs";
export async function POST(req: Request, { params }: { params:{ id:string } }){
  const form = await req.formData();
  const file = form.get("file") as File | null;
  if(!file) return NextResponse.json({ ok:false, message:"Archivo requerido" }, { status:400 });
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const ext = path.extname(file.name||".png") || ".png";
  const fname = `${params.id}-${Date.now()}${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadDir, { recursive: true });
  await fs.writeFile(path.join(uploadDir, fname), buffer);
  const imageUrl = `/uploads/${fname}`;
  await prisma.business.update({ where:{ id: params.id }, data: { imageUrl } });
  return NextResponse.json({ ok:true, imageUrl });
}
