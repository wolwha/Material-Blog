"use client";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css"; // 에디터 컴포넌트용
import "@uiw/react-markdown-preview/markdown.css"; // 렌더링된 미리보기용
import styles from "./PostEdit.module.css";

export default function PostEdit() {
  const [value, setValue] = useState<string>("");

  // onChange 핸들러 함수를 직접 정의합니다.
  const handleChange = (newValue?: string) => {
    // newValue가 undefined가 아닐 때만 setValue를 호출합니다.
    if (newValue !== undefined) {
      setValue(newValue);
    }
  };
  return (
    <>
      <div className="flex flex-col flex-grow h-[600px] w-full">
        <MDEditor
          value={value}
          onChange={handleChange}
          height={600}
          preview="live" // preview를 'live'로 설정
          // 이 부분이 핵심입니다.
          previewOptions={{
            // 'prose' 클래스를 미리보기 컨테이너에 적용
            className: `${styles.markdownContent}`,
          }}
        />
      </div>
    </>
  );
}
