import Content from "@/components/Post/Content";
import MainImage from "@/components/Post/MainImage";
import PostContainer from "@/components/Post/PostContainer";
import Title from "@/components/Post/Title";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
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
