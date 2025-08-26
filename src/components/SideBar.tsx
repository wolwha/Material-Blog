import Link from "next/link";
import { FaGithub, FaLinkedin, FaRegMoon } from "react-icons/fa";
import {
  MdHomeFilled,
  MdMenu,
  MdOutlineSearch,
  MdOutlineWbSunny,
} from "react-icons/md";

export default function SideBar() {
  return (
    <>
      <div className="w-[90px] h-[100svh] flex justify-center items-start bg-[var(--bg-gray)] select-none relative">
        <div className="grid gap-[30px] mt-[22px]">
          <button
            className="flex justify-center items-center size-[56px] rounded-[16px] hover:bg-[#d9d9d9] cursor-pointer"
            name="expand menu"
            id="expand menu"
            aria-label="expand menu"
          >
            <MdMenu size={25} />
          </button>
          <button
            className="size-[56px] rounded-[16px] bg-[var(--color-primary)] flex justify-center items-center  cursor-pointer hover:bg-[#ded0f6]"
            name="search"
            id="search"
            aria-label="search"
          >
            <MdOutlineSearch size={25} className="text-[var(--text-point)]" />
          </button>
          <Link href="/">
            <button
              className="size-[56px] rounded-[16px] text-[10px] hover:bg-[#d9d9d9] flex flex-col justify-center items-center  cursor-pointer"
              name="home"
              aria-label="home"
            >
              <MdHomeFilled size={25} />
              Home
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
          <button
            className="rounded-[16px] size-[46px] bg-[var(--color-primary)] rotate-[45deg] border-2 border-[#BEB5CD] cursor-pointer"
            name="set color"
            id="set color"
            aria-label="set Color"
          ></button>
          <button
            className="cursor-pointer"
            name="darkmode"
            id="darkmode"
            aria-label="darkmode"
          >
            <div className="w-[62px] h-[32px] rounded-[16px] bg-[var(--color-primary)] flex items-center border-2 border-[#BEB5CD]">
              <div className="size-[24px] bg-white rounded-full mx-[2px] flex justify-center items-center">
                <MdOutlineWbSunny />
                {/* <FaRegMoon /> */}
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
