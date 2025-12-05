"use client"
import Container from "@/components/Main/Container";
// import EditButton from "@/components/Main/EditButton";
import FloatingButton from "@/components/Mobile/Common/FloatingButton";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname()
  return (
    <>
      <div className="h-full rounded-[20px] bg-white justify-center items-start flex">
        <Container />
        {/* <EditButton /> */}
      </div>
      {/* 모바일 플로팅 메뉴 */}
      <div className="sm:hidden sticky bottom-[25px] justify-center flex items-center w-full">
        <FloatingButton pathname={pathname}/>
      </div>
    </>
  );
}
