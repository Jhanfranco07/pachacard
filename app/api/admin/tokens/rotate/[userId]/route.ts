import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function POST(_:Request,{params}:{params:{userId:string}}){
  const user=await prisma.user.update({ where:{ id:params.userId }, data:{ tokenVersion: { increment: 1 } } });
  return NextResponse.json({ ok:true, tokenVersion: user.tokenVersion });
}
