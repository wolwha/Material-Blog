"use client"
import CategoryPage from "@/components/Category/CategoryPage";
import FloatingButton from "@/components/Mobile/Common/floatingButton";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname()
  return (
    <>
      <CategoryPage />
      {/* 모바일 플로팅 메뉴 */}
      <div className="sm:hidden sticky bottom-[25px] justify-center flex items-center w-full">
        <FloatingButton pathname={pathname}/>
      </div>
    </>
  );
}
