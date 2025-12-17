import { MdDelete, MdEdit } from "react-icons/md";

export default function Title() {
  return (
    <>
      <div className="sm:min-w-[500px] sm:h-[220px] bg-[var(--color-primary)] flex justify-start items-center sm:rounded-[20px] sm:px-[50px] relative w-full">
        <div className="ml-[20px] my-[12px]">
          <p className="text-[16px]">날짜</p>
          <p className="text-[36px] font-semibold">제목</p>
          <p className="text-[16px]">카테고리</p>
        </div>
        <div className="sm:flex gap-[10px] sm:absolute right-[10px] bottom-[10px] hidden">
          <button
            className="size-[30px] rounded-[10px] bg-[var(--color-point)] flex justify-center items-center cursor-pointer"
            aria-label="수정 버튼"
            name="수정 버튼"
          >
            <MdEdit className="text-white" />
          </button>
          <button
            className="size-[30px] rounded-[10px] bg-[var(--color-point)] flex justify-center items-center cursor-pointer"
            name="삭제 버튼"
            aria-label="삭제 버튼"
          >
            <MdDelete className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
}
