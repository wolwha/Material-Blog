"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdCategory, MdHomeFilled } from "react-icons/md";

export default function FloatingButton () {
  const pathname = usePathname()
  return (
    <>
      <div className="flex gap-2 sticky bottom-0 bg-white px-2.5 py-2.5 rounded-[100px] shadow-xl">
        {/* 버튼 상황별 색상 재지정할 것 */}
        <Link href={"/"} aria-label="홈으로 이동">
          {pathname === "\/" ? <div className="w-[120.5px] h-14 rounded-[100px] flex justify-center items-center hover:cursor-pointer active:bg-(--color-point) hover:bg-(--color-point) bg-(--color-point) text-white">
            <MdHomeFilled />
            Home
          </div> : <div className="w-[120.5px] h-14 rounded-[100px] flex justify-center items-center hover:cursor-pointer active:bg-(--color-point) hover:bg-(--color-point) bg-(--color-primary) text-black">
            <MdHomeFilled />
            Home
          </div>}
        </Link>
        <Link href={"/category"} aria-label="카테고리 페이지로 이동">
          {pathname === "\/category" ? <div className="w-[120.5px] h-14 flex justify-center items-center bg-(--color-point) rounded-[100px] active:bg-(--color-point) hover:bg-(--color-point) transform hover:cursor-pointer text-white">
            <MdCategory />
            Category
          </div> : <div className="w-[120.5px] h-14 flex justify-center items-center bg-(--color-primary) rounded-[100px] active:bg-(--color-point) hover:bg-(--color-point) transform hover:cursor-pointer">
            <MdCategory />
            Category
          </div>}
        </Link>
      </div>
    </>
  );
}
