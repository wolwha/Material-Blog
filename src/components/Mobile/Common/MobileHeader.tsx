"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/Logo.webp";
import { MdOutlineDarkMode, MdOutlineLightMode, MdOutlineSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function MobileHeader () {
  const [loaded, setLoaded] = useState<boolean>(false)
  const {resolvedTheme, setTheme} = useTheme();
  useEffect(() => {
    setLoaded(true)
  }, [setLoaded])
  const currentTheme = loaded ? resolvedTheme : "light";

  return (
    <>
      <div className="h-15 w-full sm:hidden flex items-center bg-(--color-gray) px-4 sticky top-0 z-20">
        <Link href={"/"} aria-label="홈으로 이동">
          <div className="flex gap-2.5 justify-center items-center" >
            {/* 로고 이미지 */}
            <div className="size-8"><Image src={Logo} alt="Logo" width={32} height={32} /></div>
            {/* 로고명 */}
            <p className="text-[14px] font-bold">CODERUNNER</p>
          </div>
        </Link>
        <div className="w-full"></div>
        <div className="flex items-center gap-3.5">
          {/* 다크모드 버튼 */}
          <button className="size-8 rounded-full bg-(--color-point) justify-center items-center text-center flex" aria-label="다크모드 버튼" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>{currentTheme === "light" ? <MdOutlineDarkMode className="text-white text-[20px]" /> : <MdOutlineLightMode />
}</button>
          {/* 검색 버튼 */}
          <Link href={"/search"} aria-label="검색으로 이동">
            <button className="size-10 rounded-lg bg-(--color-primary) flex justify-center items-center"><MdOutlineSearch size={25} className="text-(--text-point)" /></button>
          </Link>
        </div>
      </div>
    </>
  );
}
