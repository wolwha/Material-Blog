import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="min-w-[1290px] h-[140px] flex justify-center items-center relative">
        <div className="font-semibold absolute left-[50px] top-[40px]">
          <p>Made by J.Y.Lee</p>
          <p>Designing inspired by Google&apos;s Material Design 3</p>
        </div>
        <div className="flex justify-center items-center gap-[5px] absolute right-[50px] top-[40px]">
          <button className="size-[60px] cursor-pointer flex justify-center items-center">
            <FaGithub size={40} />
          </button>
          <button className="size-[60px] cursor-pointer flex justify-center items-center">
            <FaLinkedin className="size-[40px] text-[#0a66c2]" />
          </button>
        </div>
      </div>
    </>
  );
}
