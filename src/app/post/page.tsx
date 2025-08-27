import MainImage from "@/components/Post/MainImage";
import PostContainer from "@/components/Post/PostContainer";
import Title from "@/components/Post/Title";
import ReactQuill from "react-quill-new";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        {/* 제목과 대표사진 */}
        <div className="flex mt-[20px] gap-[10px] justify-center items-center">
          <Title />
          {/* 이미지 삽입부분으로 변경 */}
          <MainImage />
        </div>
        {/* 내용 입력 에리어 */}
        <div className="flex h-full border-1">
          <p>리액트 퀼 삽입</p>
        </div>
      </div>
    </>
  );
}
