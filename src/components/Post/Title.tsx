import { MdDelete, MdEdit } from "react-icons/md";

export default function Title() {
  return (
    <>
      <div className="min-w-[500px] h-[220px] bg-[var(--color-primary)] flex justify-start items-center rounded-[20px] px-[50px] relative">
        <div>
          <p className="text-[16px]">날짜</p>
          <p className="text-[45px]">제목</p>
          <p className="text-[16px]">카테고리</p>
        </div>
        <div className="flex gap-[10px] absolute right-[10px] bottom-[10px]">
          <button className="size-[30px] rounded-[10px] bg-[var(--color-point)] flex justify-center items-center cursor-pointer">
            <MdEdit className="text-white" />
          </button>
          <button className="size-[30px] rounded-[10px] bg-[var(--color-point)] flex justify-center items-center cursor-pointer">
            <MdDelete className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
}
