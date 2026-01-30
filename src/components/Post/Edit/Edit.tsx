"use client";
import "react-quill-new/dist/quill.snow.css";
import TitleEdit from "./TitleEdit";
import PostEdit from "./PostEdit";
import Button from "./Button";
import TagEdit from "./TagEdit";
import ImageUpload from "./ImageUpload";
import Toast from "@/components/Common/Toast";
import { usePostStore } from "@/stores/postStore";
import { useEffect } from "react";

export default function Edit() {
  const {toastmessage, toastPopup, setToastPopup, reset} = usePostStore();
  
  useEffect(() => {
    if(setToastPopup){
      const timer = setTimeout(() => setToastPopup(false), 3000)
      // 컴포넌트가 언마운트 되거나 다음 효과가 실행되기 전 타이머 정리
      return () => clearTimeout(timer)
    }
  }, [toastPopup])

  useEffect(() => {
    return () => {reset()}
    // 언마운트시 초기화
  }, [reset])

  return (
    <>
      <div className="hidden sm:flex relative w-full justify-center">
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
        <Toast message={toastmessage} toast={toastPopup}/>
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
