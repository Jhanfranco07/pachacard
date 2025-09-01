import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req:Request,{params}:{params:{id:string}}){
  const { businessIds } = await req.json();
  await prisma.discountBusiness.deleteMany({ where:{ discountId: params.id } });
  if(Array.isArray(businessIds) && businessIds.length){
    await prisma.discountBusiness.createMany({ data: businessIds.map((b:string)=>({ discountId: params.id, businessId: b })) });
  }
  return NextResponse.json({ ok:true });
}
