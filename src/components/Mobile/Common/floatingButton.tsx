"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdCategory, MdHomeFilled } from "react-icons/md";

export default function FloatingButton () {
  const pathname = usePathname()
  return (
    <>
      <div className="flex gap-[8px] sticky bottom-0 bg-white px-[10px] py-[10px] rounded-[100px] shadow-xl">
        {/* 버튼 상황별 색상 재지정할 것 */}
        <Link href={"/"} aria-label="홈으로 이동">
          {pathname === "\/" ? <div className="w-[120.5px] h-14 rounded-[100px] flex justify-center items-center hover:cursor-pointer active:bg-(--color-point) hover:bg-(--color-point) bg-(--color-point) text-white">
            <MdHomeFilled />
            Home
          </div> : <div className="w-[120.5px] h-[56px] rounded-[100px] flex justify-center items-center hover:cursor-pointer active:bg-[var(--color-point)] hover:bg-[var(--color-point)] bg-[var(--color-primary)] text-black">
            <MdHomeFilled />
            Home
          </div>}
        </Link>
        <Link href={"/category"} aria-label="카테고리 페이지로 이동">
          {pathname === "\/category" ? <div className="w-[120.5px] h-[56px] flex justify-center items-center bg-[var(--color-point)] rounded-[100px] active:bg-[var(--color-point)] hover:bg-[var(--color-point)] transform hover:cursor-pointer text-white">
            <MdCategory />
            Category
          </div> : <div className="w-[120.5px] h-[56px] flex justify-center items-center bg-[var(--color-primary)] rounded-[100px] active:bg-[var(--color-point)] hover:bg-[var(--color-point)] transform hover:cursor-pointer">
            <MdCategory />
            Category
          </div>}
        </Link>
      </div>
    </>
  );
}
