import { useAuthStore } from "@/stores/userStore";
import { MdDelete, MdEdit } from "react-icons/md";

interface test {
  title:string
  date: string;
  category: string;
}

export default function Title({title, date, category}: test) {
  // 날짜 형식으로 변환
  const postDate = new Date(date)
  // 상태 관리에서 로그인 여부 받아오기
  const {isAuthenticated} = useAuthStore()
  return (
    <>
      <div className="sm:min-w-[500px] sm:h-[220px] bg-[var(--color-primary)] flex justify-start items-center sm:rounded-[20px] sm:px-[50px] relative w-full">
        <div className="ml-[20px] my-[12px]">
          <p className="text-[16px]">{postDate.getFullYear() + "." + postDate.getMonth().toLocaleString().padStart(2, "0") + "." + postDate.getDay().toLocaleString().padStart(2, "0")}</p>
          <p className="text-[36px] font-semibold">{title}</p>
          <p className="text-[16px]">{category}</p>
        </div>
        <div className="sm:flex gap-[10px] sm:absolute right-[10px] bottom-[10px] hidden">
          {isAuthenticated === true ? <button
            className="size-[30px] rounded-[10px] bg-[var(--color-point)] flex justify-center items-center cursor-pointer"
            aria-label="수정 버튼"
            name="수정 버튼"
          >
            <MdEdit className="text-white" />
          </button> : null}
          {/* 로그인이 안되어있으면 버튼 숨기기 */}
          {isAuthenticated === true ? <button
            className="size-[30px] rounded-[10px] bg-[var(--color-point)] flex justify-center items-center cursor-pointer"
            name="삭제 버튼"
            aria-label="삭제 버튼"
          >
            <MdDelete className="text-white" />
          </button> : null}
        </div>
      </div>
    </>
  );
}
