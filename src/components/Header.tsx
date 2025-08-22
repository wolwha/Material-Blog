import { MdPerson } from "react-icons/md";

export default function Header() {
  return (
    <>
      <div className="w-full h-[105px] bg-[#f4f4f4] flex justify-start items-center relative">
        <button className="flex gap-[10px] ml-[13px] cursor-pointer">
          <div className="size-[56px] rounded-[16px] bg-[#d9d9d9]"></div>
          <div className="flex flex-col justify-start items-start">
            <p className="text-[20px] font-semibold">CODERUNNER</p>
            <p className="text-[10px] font-semibold">.BLOG</p>
          </div>
        </button>
        <div className="absolute right-[30px] h-[40px] top-[23px] gap-[20px] flex">
          <button className="cursor-pointer font-semibold hover:underline">
            ABOUT
          </button>
          <button className="size-[40px] rounded-full bg-[#E8DEF8] flex justify-center items-center cursor-pointer">
            <MdPerson size={25} />
          </button>
        </div>
      </div>
    </>
  );
}
