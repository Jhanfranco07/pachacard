import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home(){
  const session = await auth();
  const role = (session as any)?.role ?? (session as any)?.user?.role ?? "USER";

  if (session?.user) {
    if (role === "ADMIN") redirect("/admin");
    redirect("/app");
  }
  redirect("/login");
}
