import {
  FaGithub,
  // FaLinkedin
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="sm:h-35 h-25 flex justify-center items-center sm:relative select-none mt-5 sm:mt-0 bg-(--color-card) absolute inset-x-0 bottom-0 w-full">
        {/* PC 푸터 적용 텍스트 */}
        <div className="font-semibold sm:absolute sm:left-12.5 sm:top-10 sm:text-[16px] text-[14px] hidden sm:flex-col sm:flex">
          <p>Made by J.Y.Lee</p>
          <p>Designing inspired by Google&apos;s Material Design 3</p>
        </div>
        {/* 모바일 푸터 적용 텍스트 */}
        <div className="font-semibold sm:absolute sm:left-12.5 sm:top-10 sm:text-[16px] text-[14px] sm:hidden">
          <p>Made by J.Y.Lee</p>
          <p>Designing inspired by Material Design 3</p>
        </div>
        <div className="sm:flex sm:justify-center sm:items-center sm:gap-1.25 sm:absolute sm:right-12.5 sm:top-10 hidden">
          <a
            href="https://github.com/wolwha/Material-Blog/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="size-15 cursor-pointer flex justify-center items-center"
            id="Github Repo"
            aria-label="Github Repo"
          >
            <FaGithub size={40} className="text-(--color-github)" />
          </a>
          {/* 링크드인 버튼 적용 여부는 조금 더 고민해보기 */}
          {/* <button className="size-[60px] cursor-pointer flex justify-center items-center">
            <FaLinkedin className="size-10 text-[#0a66c2]" />
          </button> */}
        </div>
      </div>
    </>
  );
}
