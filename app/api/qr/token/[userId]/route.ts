import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signQrToken } from "@/lib/token";
export async function GET(_:Request,{params}:{params:{userId:string}}){
  const user=await prisma.user.findUnique({ where:{ id:params.userId } });
  if(!user) return NextResponse.json({ ok:false, message:"No existe el usuario" }, { status:404 });
  const token=await signQrToken({ sub:user.id, tier:user.tier, tv:user.tokenVersion });
  return NextResponse.json({ ok:true, token });
}
