"use client";
import "react-quill-new/dist/quill.snow.css";
import TitleEdit from "./TitleEdit";
import PostEdit from "./PostEdit";
import Button from "./Button";
import TagEdit from "./TagEdit";
import ImageUpload from "./ImageUpload";

export default function Edit() {
  return (
    <>
      <div className="hidden sm:flex">
        <div className="flex flex-col gap-2.5 items-end">
          {/* 제목과 대표사진 */}
          <div className="flex mt-5 gap-2.5 justify-center items-center">
            <TitleEdit />
            {/* 이미지 삽입부분으로 변경 */}
            <ImageUpload />
          </div>
          {/* 내용 입력 에리어 */}
          <PostEdit />
          <TagEdit />
          <Button />
        </div>
      </div>
      <div className="justify-center items-center text-center flex h-[calc(100vh-125px)] sm:hidden">
        <p>
          게시글 작성은 PC에서 가능합니다.<br/>
          PC로 접속해 주세요.
        </p>
      </div>
    </>
  );
}
