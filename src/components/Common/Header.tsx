import Image from "next/image";
import Logo from "/src/assets/Gemini_Generated_Image_ul6ukvul6ukvul6u-다음에서-변환-png.webp";
import { MdPerson } from "react-icons/md";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="w-full h-[105px] bg-[var(--bg-gray)] flex justify-start items-center relative select-none">
        <Link href={"/"}>
          <button
            className="flex gap-[10px] ml-[13px] cursor-pointer"
            id="Logo"
            aria-label="Logo"
          >
            <div className="size-[56px]">
              <Image src={Logo} alt="Logo" width={56} height={56} />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-[20px] font-semibold">CODE RUNNER</p>
              <p className="text-[10px] font-semibold">.BLOG</p>
            </div>
          </button>
        </Link>
        <div className="absolute right-[30px] h-[40px] top-[23px] gap-[20px] flex justify-center items-center">
          <Link href={"/about"}>
            <button
              className="cursor-pointer font-semibold hover:underline"
              id="ABOUT"
              aria-label="ABOUT"
            >
              ABOUT
            </button>
          </Link>
          <Link href={"/profile"}>
            <button
              className="size-[40px] rounded-full bg-[var(--color-primary)] flex justify-center items-center cursor-pointer"
              id="Profile"
              name="Profile"
              aria-label="Profile"
            >
              <MdPerson size={25} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
