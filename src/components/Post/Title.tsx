import { useAuthStore } from "@/stores/userStore";
import { MdDelete, MdEdit } from "react-icons/md";

interface titleTabData {
  title:string
  date: string;
  category: string;
  tags: string[];
}

export default function Title({title, date, category, tags}: titleTabData) {
  // 날짜 형식으로 변환
  const postDate = new Date(date)
  // 상태 관리에서 로그인 여부 받아오기
  const {isAuthenticated} = useAuthStore()
  return (
    <>
      <div className="sm:min-w-125 sm:h-55 bg-(--color-card) flex justify-start items-center sm:rounded-[20px] sm:px-8 relative w-full">
        <div className="ml-5">
          <p className="text-[16px]">{postDate.getFullYear() + "." + (postDate.getMonth() + 1).toLocaleString().padStart(2, "0") + "." + postDate.getDate().toLocaleString().padStart(2, "0")}</p>
          <p className="text-[36px] font-semibold">{title}</p>
          <p className="text-[16px]">{category}</p>
          <div className="mt-10">
            {tags.map((tag,idx) => (
              <span className="rounded-[5px] bg-(--color-custom-white) px-1.25 justify-center text-center items-center mr-1" key={idx}>
                {`#${tag}`}
              </span>
            ))}
          </div>
        </div>
        <div className="sm:flex gap-2.5 sm:absolute right-5 bottom-5 hidden">
          {isAuthenticated === true ? <button
            className="size-7.5 rounded-[10px] bg-(--color-primary) flex justify-center items-center cursor-pointer"
            aria-label="수정 버튼"
            name="수정 버튼"
          >
            <MdEdit className="text-white" />
          </button> : null}
          {/* 로그인이 안되어있으면 버튼 숨기기 */}
          {isAuthenticated === true ? <button
            className="size-7.5 rounded-[10px] bg-(--color-primary) flex justify-center items-center cursor-pointer"
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
