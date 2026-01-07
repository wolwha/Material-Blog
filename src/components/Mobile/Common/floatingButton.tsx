"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdCategory, MdHomeFilled } from "react-icons/md";

export default function FloatingButton () {
  const pathname = usePathname()
  return (
    <>
      <div className="flex gap-[8px] sticky bottom-0 bg-white px-[10px] py-[10px] rounded-[100px] shadow-xl">
        <Link href={"/"}>
          {pathname === "\/" ? <button className="w-[120.5px] h-[56px] rounded-[100px] flex justify-center items-center hover:cursor-pointer active:bg-[var(--color-point)] hover:bg-[var(--color-point)] bg-[var(--color-point)] text-white" aria-label="홈 버튼">
            <MdHomeFilled />
            Home
          </button> : <button className="w-[120.5px] h-[56px] rounded-[100px] flex justify-center items-center hover:cursor-pointer active:bg-[var(--color-point)] hover:bg-[var(--color-point)] bg-[var(--color-primary)] text-black" aria-label="홈 버튼">
            <MdHomeFilled />
            Home
          </button>}
        </Link>
        <Link href={"/category"}>
          {pathname === "\/category" ? <button className="w-[120.5px] h-[56px] flex justify-center items-center bg-[var(--color-point)] rounded-[100px] active:bg-[var(--color-point)] hover:bg-[var(--color-point)] transform hover:cursor-pointer text-white" aria-label="카테고리 버튼">
            <MdCategory />
            Category
          </button> : <button className="w-[120.5px] h-[56px] flex justify-center items-center bg-[var(--color-primary)] rounded-[100px] active:bg-[var(--color-point)] hover:bg-[var(--color-point)] transform hover:cursor-pointer" aria-label="카테고리 버튼">
            <MdCategory />
            Category
          </button>}
        </Link>
      </div>
    </>
  );
}
