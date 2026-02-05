import { usePostStore } from '@/stores/postStore';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function Button() {
  const supabase = createClient();
  const {
    title,
    category,
    content,
    tag,
    thumbnail,
    context,
    reset,
    setToastMessage,
    setToastPopup,
  } = usePostStore();
  const router = useRouter();

  const handleSave = async () => {
    const messageList: string[] = [];
    // 필수 입력 필드가 비어있는 경우
    if (
      title === null ||
      content === null ||
      context === null ||
      category === null ||
      tag === null
    ) {
      // 입력 필드의 값이 null이거나 " "인지 확인
      if (!(title || '').trim()) {
        setToastPopup(true);
        // setToastMessage("제목을 입력해주세요")
        messageList.push('제목');
      }
      if (!(category || '').trim()) {
        setToastPopup(true);
        // setToastMessage("본문을 작성해주세요")
        messageList.push('카테고리');
      }
      if (!(context || '').trim()) {
        setToastPopup(true);
        // setToastMessage("게시글 설명을 입력해주세요")
        messageList.push('설명');
      }
      if (!(content || '').trim()) {
        setToastPopup(true);
        // setToastMessage("카테고리를 입력해주세요")
        messageList.push('본문');
      }
      if (!tag || tag.length === 0) {
        setToastPopup(true);
        // setToastMessage("태그를 추가해주세요")
        messageList.push('태그');
      }
      setToastMessage(`${messageList.toString()}을(를) 입력해 주세요`);
      return;
    }

    // 업로드된 썸네일이 없을 경우
    else if (thumbnail === null) {
      const { data, error } = await supabase.from('Posts').insert([
        // 한 row에 들어가는 데이터는 중괄호 내부에 함께 입력. 중괄호로 나눌 시 여러 row를 추가하겠다는 의미
        {
          Content: content,
          Title: title,
          Tags: tag,
          Category: category,
          Context: context,
        },
      ]);

      if (error) {
        console.error(error.message);
      } else {
        console.log('upload success!');
        setToastPopup(true);
        setToastMessage('업로드 중입니다...');
        const timer = setTimeout(() => {
          setToastPopup(false);
          router.push('/?message=upload_success');
          router.refresh();
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else {
      const file = thumbnail as File;
      const fileName = `${Date.now()}_${file.name}`;
      const bucketName = 'Image';
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(`Thumbnail/${fileName}`, file);

      if (error) {
        console.error(error);
      }

      // supabase 버킷에 업로드 된 이미지의 URL 받아오기
      const { data: thumbnailURL } = supabase.storage
        .from(bucketName)
        .getPublicUrl(`Thumbnail/${fileName}`);
      const publicURL = thumbnailURL.publicUrl;

      const { error: uploadWithThumbnailError } = await supabase
        .from('Posts')
        .insert([
          {
            Content: content,
            Title: title,
            Tags: tag,
            Category: category,
            Thumbnail: publicURL,
          },
        ]);

      if (uploadWithThumbnailError) {
        console.error(uploadWithThumbnailError);
      } else {
        reset();
        router.push('/?message=upload_success');
      }
    }
  };
  const handleCancel = () => {
    reset();
    router.push('/');
  };
  return (
    <>
      <div className="mt-2.5 flex gap-5">
        <button
          className="h-8 w-21.25 cursor-pointer rounded-[100px] bg-(--color-card)"
          name="저장"
          aria-label="저장"
          onClick={handleSave}
        >
          저장
        </button>
        <button
          className="h-8 w-21.25 cursor-pointer rounded-[100px] border border-(--color-primary)"
          aria-label="취소"
          onClick={handleCancel}
        >
          취소
        </button>
      </div>
    </>
  );
}
