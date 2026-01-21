"use client";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css"; // 에디터 컴포넌트용
import "@uiw/react-markdown-preview/markdown.css"; // 렌더링된 미리보기용
import styles from "./PostEdit.module.css";
import { usePostStore } from "@/stores/postStore";

export default function PostEdit() {
  const {content, setContent} = usePostStore();
  const handleChange = (newValue?: string) => {
    if (newValue !== undefined) {
      setContent(newValue);
    }
  };
  return (
    <>
      <div className="flex flex-col grow h-150 w-full">
        <MDEditor
          value={content ?? ""}
          onChange={handleChange}
          height={600}
          preview="live" // preview를 'live'로 설정
          data-color-mode="light"
          previewOptions={{
            className: `${styles.markdownContent}`,
          }}
        />
      </div>
    </>
  );
}
