import {
  FaGithub,
  // FaLinkedin
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="sm:h-[140px] h-[100px] flex justify-center items-center sm:relative select-none mt-[20px] sm:mt-[0px] bg-[var(--color-primary)] absolute inset-x-0 bottom-0 w-full">
        {/* PC 푸터 적용 텍스트 */}
        <div className="font-semibold sm:absolute sm:left-[50px] sm:top-[40px] sm:text-[16px] text-[14px] hidden sm:flex-col sm:flex">
          <p>Made by J.Y.Lee</p>
          <p>Designing inspired by Google&apos;s Material Design 3</p>
        </div>
        {/* 모바일 푸터 적용 텍스트 */}
        <div className="font-semibold sm:absolute sm:left-[50px] sm:top-[40px] sm:text-[16px] text-[14px] sm:hidden">
          <p>Made by J.Y.Lee</p>
          <p>Designing inspired by Material Design 3</p>
        </div>
        <div className="sm:flex sm:justify-center sm:items-center sm:gap-[5px] sm:absolute sm:right-[50px] sm:top-[40px] hidden">
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
