"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaGithub,
  FaLinkedin,
  // FaRegMoon
} from "react-icons/fa";
import {
  MdCategory,
  MdHomeFilled,
  // MdMenu,
  MdOutlineSearch,
  MdOutlineWbSunny,
} from "react-icons/md";
import DarkmodeButton from "./DarkmodeButton";

export default function SideBar() {
  // 현재 도메인 위치 받아오기
  const location = usePathname();
  const themeToggle = () => {
    const {theme, setTheme} = useTheme()
  }
  return (
    <>
      {/* 사이드바 확장 기능은 추후 추가 고려 */}
      <div className="w-[90px] h-[100svh] flex justify-center items-start bg-[var(--color-gray)] select-none relative">
        <div className="grid gap-[30px] mt-[22px]">
          {/* 추후 사용 가능성을 고려하여 코드는 남겨놓기 */}
          {/* <button
            className="flex justify-center items-center size-[56px] rounded-[16px] hover:bg-[#d9d9d9] cursor-pointer"
            name="expand menu"
            id="expand menu"
            aria-label="expand menu"
          >
            <MdMenu size={25} />
          </button> */}
          <Link href={"/search"}>
            <button
              className="size-[56px] rounded-[16px] bg-[var(--color-search)] flex justify-center items-center cursor-pointer hover:bg-[var(--color-search-hover)]"
              name="search"
              id="search"
              aria-label="search"
            >
              <MdOutlineSearch size={25} className="text-[var(--text-point)]" />
            </button>
          </Link>
          <Link href="/">
            <button
              className={`size-[56px] rounded-[16px] text-[10px] hover:bg-[#d9d9d9] flex flex-col justify-center items-center cursor-pointer ${
                location === "/" ? "bg-[#d9d9d9] text-black" : ""
              }`}
              name="home"
              aria-label="home"
            >
              <MdHomeFilled size={25} />
              Home
            </button>
          </Link>
          <Link href={"/category"}>
            <button
              className={`size-[56px] rounded-[16px] text-[10px] hover:bg-[#d9d9d9] flex flex-col justify-center items-center  cursor-pointer ${
                location === "/category" ? "bg-[#d9d9d9]" : ""
              }`}
              name="Category"
              aria-label="Category"
            >
              <MdCategory size={25} />
              Category
            </button>
          </Link>
          <a
            href="https://github.com/wolwha"
            target="_blank"
            rel="noopener noreferrer"
            className="size-[56px] hover:bg-[#d9d9d9] rounded-[16px] flex flex-col justify-center items-center gap-[5px] text-[10px] cursor-pointer"
            id="github"
            aria-label="github profile"
          >
            <FaGithub size={25} />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/sww727/?originalSubdomain=kr"
            target="_blank"
            rel="noopener noreferrer"
            className="size-[56px] rounded-[16px] hover:bg-[#d9d9d9] flex flex-col justify-center items-center gap-[5px] text-[10px] cursor-pointer"
            id="Linkedin"
            aria-label="Linkedin Profile"
          >
            <FaLinkedin className="size-[25px] text-[#0a66c2]" />
            Linked In
          </a>
        </div>
        <div className="absolute bottom-[20px] left-[14px] flex justify-center items-center flex-col gap-[20px]">
          {/* 추후 추가 */}
          {/* <button
            className="rounded-[16px] size-[46px] bg-[var(--color-primary)] rotate-[45deg] border-2 border-[#BEB5CD] cursor-pointer"
            name="set color"
            id="set color"
            aria-label="set Color"
          ></button> */}
          <DarkmodeButton/>
        </div>
      </div>
    </>
  );
}
