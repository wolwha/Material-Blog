export const dynamic = "force-dynamic";

import Container from "@/components/Main/Container";
import FloatingButton from "@/components/Mobile/Common/floatingButton";
import { createClient } from "@/utils/supabase/server";


export default async function Page() {
  const supabase = await createClient()
  const fetchResult = await supabase.from("Posts").select("*")
  return (
    <>
      <div className="h-full rounded-[20px] bg-white justify-center items-start flex">
        <Container posts={fetchResult.data} />
        {/* <EditButton /> */}
      </div>
      {/* 모바일 플로팅 메뉴 */}
      <div className="sm:hidden sticky bottom-[25px] justify-center flex items-center w-full">
        <FloatingButton/>
      </div>
    </>
  );
}
