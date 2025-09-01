// app/api/upload/route.ts
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File | null;
  if (!file) return NextResponse.json({ ok: false, error: "No file" }, { status: 400 });
  if (!file.type.startsWith("image/")) return NextResponse.json({ ok: false, error: "Only images" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  if (bytes.byteLength > 2 * 1024 * 1024) {
    return NextResponse.json({ ok: false, error: "Max 2MB" }, { status: 400 });
  }

  const ext = file.type.split("/").pop() || "bin";
  const name = `${Math.random().toString(36).slice(2)}-${Date.now()}.${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadDir, { recursive: true });
  await fs.writeFile(path.join(uploadDir, name), Buffer.from(bytes));

  return NextResponse.json({ ok: true, url: `/uploads/${name}` });
}
