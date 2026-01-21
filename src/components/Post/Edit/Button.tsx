import { usePostStore } from "@/stores/postStore";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Button() {
  const supabase = createClient();
  const {title, category, content, tag, reset} = usePostStore();
  const router = useRouter();
  const handleSave = async () => {
    console.log("제목:", title + ", " + "카테고리:", category + ", " + "본문:", content + ", " + "태그: ", tag)
    const { data, error } = await supabase
    .from('Posts')
    .insert([
      // 한 row에 들어가는 데이터는 중괄호 내부에 함께 입력. 중괄호로 나눌 시 여러 row를 추가하겠다는 의미
      { Content: content, Title: title, Tags: tag, Category: category },
    ])

  if(error){
    console.error(error.message)
  }else{
    console.log("upload success!")
  }
  }
  const handleCancel = () => {
    reset();
    router.push("/")
  }
  return (
    <>
      <div className="flex gap-5 mt-2.5">
        <button
          className="w-21.25 h-8 rounded-[100px] bg-(--color-primary) cursor-pointer"
          name="저장"
          aria-label="저장"
          onClick={handleSave}
        >
          저장
        </button>
          <button
            className="w-21.25 h-8 rounded-[100px] border border-(--color-primary) cursor-pointer"
            aria-label="취소"
            onClick={handleCancel}
          >
            취소
          </button>
      </div>
    </>
  );
}
