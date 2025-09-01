import { prisma } from "@/lib/prisma"; import bcrypt from "bcryptjs";
async function main(){
  const users=[
    {email:"basic@demo.local", name:"Basic", tier:"BASIC", role:"USER", pass:"basic123"},
    {email:"normal@demo.local", name:"Normal", tier:"NORMAL", role:"USER", pass:"normal123"},
    {email:"premium@demo.local", name:"Premium", tier:"PREMIUM", role:"USER", pass:"premium123"},
    {email:"admin@demo.local", name:"Admin", tier:"PREMIUM", role:"ADMIN", pass:"admin123"}
  ];
  for(const u of users){ const hash=await bcrypt.hash(u.pass,10);
    await prisma.user.upsert({ where:{email:u.email}, update:{passwordHash:hash,tier:u.tier,role:u.role,status:"ACTIVE"}, create:{email:u.email,name:u.name,passwordHash:hash,tier:u.tier,role:u.role,status:"ACTIVE"} });
  }
  const biz=[{code:"RESTO",name:"Resto Demo"},{code:"CAFE",name:"Café Central"},{code:"GYM",name:"Gimnasio Strong"}];
  for(const b of biz){ await prisma.business.upsert({ where:{code:b.code}, update:{name:b.name,status:"ACTIVE"}, create:{code:b.code,name:b.name,status:"ACTIVE"} }); }
  const now=new Date(); const end=new Date(now.getTime()+1000*60*60*24*30);
  const discounts=[
    {code:"RESTO10",title:"10% en resto",description:"En todos los platos",tierBasic:true,startAt:now,endAt:end,status:"PUBLISHED"},
    {code:"CAFE15",title:"15% en café",description:"Bebidas calientes",tierNormal:true,startAt:now,endAt:end,status:"PUBLISHED"},
    {code:"GYM20",title:"20% en membresía",description:"Primera inscripción",tierPremium:true,startAt:now,endAt:end,status:"PUBLISHED"}
  ];
  for(const d of discounts){ await prisma.discount.upsert({ where:{code:d.code}, update:d as any, create:{...d} as any }); }
  console.log("Seed listo");
}
main().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1);});
