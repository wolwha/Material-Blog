import Content from "./Content";
import MainImage from "./MainImage";
import PostContainer from "./PostContainer";
import Title from "./Title";

export default function Post () {
  return (
    <>
      <div className="flex flex-col gap-[20px] border-1">
        {/* 제목과 대표사진 */}
        <div className="flex mt-[20px] gap-[10px] justify-center items-center">
          <Title />
          <MainImage />
        </div>
        {/* 내용과 목차 */}
        <div className="flex h-full">
          <div className="w-[150px] h-full"></div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex w-full ml-[30px]">
              <PostContainer />
            </div>
          </div>
          <div className="ml-[30px]">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}
