import Image from "next/image";
import Link from "next/link";
import Logo from "/src/assets/Logo.webp";
import { MdOutlineDarkMode, MdOutlineSearch } from "react-icons/md";

export default function MobileHeader () {
  return (
    <>
      <div className="h-[60px] w-[100vw] sm:hidden flex items-center bg-[#f4f4f4] px-[16px] sticky top-0 z-10">
        <Link href={"/"}>
          <div className="flex gap-[10px] justify-center items-center">
            {/* 로고 이미지 */}
            <div className="size-[32px]"><Image src={Logo} alt="Logo" width={32} height={32} /></div>
            {/* 로고명 */}
            <p className="text-[14px] font-bold">CODERUNNER</p>
          </div>
        </Link>
        <div className="w-full"></div>
        <div className="flex items-center gap-[14px]">
          {/* 다크모드 버튼 */}
          <button className="size-[32px] rounded-full bg-[var(--color-point)] justify-center items-center text-center flex"><MdOutlineDarkMode className="text-white text-[20px]" /></button>
          {/* 검색 버튼 */}
          <Link href={"/search"}>
            <button className="size-[40px] rounded-[8px] bg-[var(--color-primary)] flex justify-center items-center"><MdOutlineSearch size={25} className="text-[var(--text-point)]" /></button>
          </Link>
        </div>
      </div>
    </>
  );
}
