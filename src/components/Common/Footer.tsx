import {
  FaGithub,
  // FaLinkedin
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="h-[140px] flex justify-center items-center relative select-none">
        <div className="font-semibold absolute left-[50px] top-[40px]">
          <p>Made by J.Y.Lee</p>
          <p>Designing inspired by Google&apos;s Material Design 3</p>
        </div>
        <div className="flex justify-center items-center gap-[5px] absolute right-[50px] top-[40px]">
          <a
            href="https://github.com/wolwha/Material-Blog/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="size-[60px] cursor-pointer flex justify-center items-center"
            id="Github Repo"
            aria-label="Github Repo"
          >
            <FaGithub size={40} className="text-gray-500" />
          </a>
          {/* 링크드인 버튼 적용 여부는 조금 더 고민해보기 */}
          {/* <button className="size-[60px] cursor-pointer flex justify-center items-center">
            <FaLinkedin className="size-[40px] text-[#0a66c2]" />
          </button> */}
        </div>
      </div>
    </>
  );
}
