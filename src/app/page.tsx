export const dynamic = "force-dynamic";

import Container from "@/components/Main/Container";
import EditButton from "@/components/Main/EditButton";
import FloatingButton from "@/components/Mobile/Common/floatingButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";


export default async function Page() {
  const supabase = await createClient()
  const cookieStore = await cookies()
  // 쿠키에 특정 쿠키가 존재하는지 확인
  const hasCookie = cookieStore.has('sb-iziqhetiqqnkxiyymwsd-auth-token-code-verifier')
  // Posts의 데이터를 전부 받아오기
  const fetchResult = await supabase.from("Posts").select("*").order("created_at", {ascending: false})
  return (
    <>
      <div className="h-full rounded-[20px] bg-[var(--color-white)] justify-center items-start flex">
        <Container posts={fetchResult.data} />
        {hasCookie ? <EditButton /> : null}
      </div>
      {/* 모바일 플로팅 메뉴 */}
      <div className="sm:hidden sticky bottom-[25px] justify-center flex items-center w-full z-20">
        <FloatingButton/>
      </div>
    </>
  );
}
