export const dynamic = "force-dynamic";

import Container from "@/components/Main/Container";
import EditButton from "@/components/Main/EditButton";
import FloatingButton from "@/components/Mobile/Common/floatingButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";


export default async function Page() {
  const supabase = await createClient()
  const cookieStore = await cookies()
  const hasCookie = cookieStore.has('sb-iziqhetiqqnkxiyymwsd-auth-token-code-verifier')
  const fetchResult = await supabase.from("Posts").select("*")
  return (
    <>
      <div className="h-full rounded-[20px] bg-white justify-center items-start flex">
        <Container posts={fetchResult.data} />
        {hasCookie ? <EditButton /> : null}
      </div>
      {/* 모바일 플로팅 메뉴 */}
      <div className="sm:hidden sticky bottom-[25px] justify-center flex items-center w-full">
        <FloatingButton/>
      </div>
    </>
  );
}
