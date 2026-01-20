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
    </>
  );
}
