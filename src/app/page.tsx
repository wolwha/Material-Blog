import Container from "@/components/Main/Container";
// import EditButton from "@/components/Main/EditButton";
import FloatingButton from "@/components/Mobile/Common/floatingButton";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  console.log(user)
  return (
    <>
      <div className="h-full rounded-[20px] bg-white justify-center items-start flex">
        <Container />
        {/* <EditButton /> */}
      </div>
      {/* 모바일 플로팅 메뉴 */}
      <div className="sm:hidden sticky bottom-[25px] justify-center flex items-center w-full">
        <FloatingButton/>
      </div>
    </>
  );
}
