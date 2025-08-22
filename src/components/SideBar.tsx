import Link from "next/link";
import { FaGithub, FaLinkedin, FaRegMoon } from "react-icons/fa";
import { MdHomeFilled, MdMenu, MdOutlineSearch } from "react-icons/md";

export default function SideBar() {
  return (
    <>
      <div className="w-[90px] h-auto flex justify-center items-start bg-[#f4f4f4] select-none relative">
        <div className="grid gap-[30px] mt-[22px]">
          <button className="flex justify-center items-center size-[56px] rounded-[16px] hover:bg-[#d9d9d9]  cursor-pointer">
            <MdMenu size={25} />
          </button>
          <button
            className="size-[56px] rounded-[16px] bg-[#E8DEF8] flex justify-center items-center  cursor-pointer hover:bg-[#ded0f6]"
            name="search"
          >
            <MdOutlineSearch size={25} className="text-[#4f378a]" />
          </button>
          <Link href="/">
            <button
              className="size-[56px] rounded-[16px] text-[10px] hover:bg-[#d9d9d9] flex flex-col justify-center items-center  cursor-pointer"
              name="home"
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
          >
            <FaLinkedin className="size-[25px] text-[#0a66c2]" />
            Linked In
          </a>
        </div>
        <div className="absolute bottom-[20px] left-[19px] flex justify-center items-center flex-col gap-[20px]">
          <button className="rounded-[16px] size-[46px] bg-[#E8DEF8] rotate-[45deg] border-2 border-[#BEB5CD]"></button>
          <div className="w-[52px] h-[32px] rounded-[16px] bg-[#6750a4] flex items-center">
            <div className="size-[24px] bg-white rounded-full mx-[4px] flex justify-center items-center">
              <FaRegMoon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
