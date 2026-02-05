import {
  FaGithub,
  // FaLinkedin
} from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 mt-5 flex h-25 w-full items-center justify-center bg-(--color-card) select-none sm:relative sm:mt-0 sm:h-35">
        {/* PC 푸터 적용 텍스트 */}
        <div className="hidden text-[14px] font-semibold sm:absolute sm:top-10 sm:left-12.5 sm:flex sm:flex-col sm:text-[16px]">
          <p>Made by J.Y.Lee</p>
          <p>Designing inspired by Google&apos;s Material Design 3</p>
        </div>
        {/* 모바일 푸터 적용 텍스트 */}
        <div className="text-[14px] font-semibold sm:absolute sm:top-10 sm:left-12.5 sm:hidden sm:text-[16px]">
          <p>Made by J.Y.Lee</p>
          <p>Designing inspired by Material Design 3</p>
        </div>
        <div className="hidden sm:absolute sm:top-10 sm:right-12.5 sm:flex sm:items-center sm:justify-center sm:gap-1.25">
          <a
            href="https://github.com/wolwha/Material-Blog/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-15 cursor-pointer items-center justify-center"
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
