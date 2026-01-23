import { usePostStore } from "@/stores/postStore";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Button() {
  const supabase = createClient();
  const {title, category, content, tag, thumbnail, reset} = usePostStore();
  const router = useRouter();
  const handleSave = async () => {
    // 업로드된 썸네일이 없을 경우
    if(thumbnail === null){
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
        router.push("/")
    }
  }else{
    const file = thumbnail as File
    const fileName = `${Date.now()}_${file.name}`;
    const bucketName = "Image";
    const {data, error} = await supabase.storage.from(bucketName).upload(`Thumbnail/${fileName}`, file)

    if(error){
      console.error(error)
    }

    // supabase 버킷에 업로드 된 이미지의 URL 받아오기
    const{data:thumbnailURL} = supabase.storage.from(bucketName).getPublicUrl(`Thumbnail/${fileName}`);
    const publicURL = thumbnailURL.publicUrl;
    console.log(publicURL)

      const { error:uploadWithThumbnailError } = await supabase
      .from('Posts')
      .insert([
        { Content: content, Title: title, Tags: tag, Category: category, Thumbnail: publicURL },
      ])

      if(uploadWithThumbnailError){
        console.error(uploadWithThumbnailError)
      }else{
        reset();
        router.push('/')
      }
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
          className="w-21.25 h-8 rounded-[100px] bg-(--color-card) cursor-pointer"
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
