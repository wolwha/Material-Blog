import { usePostStore } from "@/stores/postStore";
import { useRef } from "react";

export default function TitleEdit() {
  const date = new Date();
  const {title, setTitle} = usePostStore();
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  return (
    <>
      <div className="min-w-125 h-55 bg-(--color-card) flex justify-start items-center rounded-[20px] px-12.5 relative">
        <div className="flex flex-col gap-2.5">
          <p className="text-[16px]">{date.getFullYear() + "." +( date.getMonth() + 1).toLocaleString().padStart(2, "0") + "." + date.getDate().toLocaleString().padStart(2, "0")}</p>
          <input
            type="text"
            className="text-[36px] font-semibold bg-(--color-custom-white) rounded-[10px] outline-0 px-2.5 max-w-112.5"
            placeholder="제목을 입력하세요"
            aria-label="제목 입력 상자"
            onChange={() => handleTitle}
            value={title ?? ""}
          />
          {/* 드롭다운 메뉴로 추후 변경 */}
          <div>
            <p className="text-[16px]">카테고리</p>
            <input type="text" name="카테고리" id="카테고리" className="bg-(--color-custom-white) rounded-[10px] text-[16px] w-full outline-0 px-2.5" placeholder="카테고리를 입력하세요" />
          </div>
        </div>
      </div>
    </>
  );
}
