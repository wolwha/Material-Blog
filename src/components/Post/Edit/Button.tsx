import { usePostStore } from '@/stores/postStore';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function Button({
  isEdit,
  editId,
}: {
  isEdit?: boolean;
  editId?: number;
}) {
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
    pendingFiles,
  } = usePostStore();
  const router = useRouter();

  const handleSave = async () => {
    const messageList: string[] = [];
    // 필수 입력 필드가 비어있는 경우
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
    if (messageList.length > 0) {
      setToastMessage(`${messageList.toString()}을(를) 입력해 주세요`);
      return;
    }
    if (isEdit !== true) {
      try {
        setToastPopup(true);
        setToastMessage('업로드 중입니다...');

        // 본문 이미지 업로드 및 URL 치환
        let finalContent = content;
        const bucketName = 'Image';

        for (const [blobUrl, file] of pendingFiles.entries()) {
          // 본문에 해당 blob 주소가 남아있는 경우에만 업로드 진행
          if (finalContent?.includes(blobUrl)) {
            const fileName = `${Date.now()}_${file.name}`;
            const { data: uploadDate, error: uploadError } =
              await supabase.storage
                .from(bucketName)
                .upload(`Contents/${fileName}`, file);

            if (uploadError) {
              console.error('이미지 업로드 실패: ', uploadError.message);
              continue;
            }

            const { data: imageUrl } = supabase.storage
              .from(bucketName)
              .getPublicUrl(`Contents/${fileName}`);

            // 본문의 임시 blob 주소를 실제 퍼블릭 URL로 치환
            finalContent = finalContent.replaceAll(blobUrl, imageUrl.publicUrl);
          }
          // 메모리 해제
          URL.revokeObjectURL(blobUrl);
        }
        let finalThumbnailURL = null;
        if (thumbnail) {
          const file = thumbnail as File;
          const fileName = `${Date.now()}_${file.name}`;
          const bucketName = 'Image';
          const { error: thumbError } = await supabase.storage
            .from(bucketName)
            .upload(`Thumbnail/${fileName}`, file);

          if (thumbError) {
            console.error(thumbError);
          }

          const { data: thumbData } = supabase.storage
            .from(bucketName)
            .getPublicUrl(`Thumbnail/${fileName}`);

          finalThumbnailURL = thumbData.publicUrl;
        }

        const { error: insertError } = await supabase.from('Posts').insert([
          // 한 row에 들어가는 데이터는 중괄호 내부에 함께 입력. 중괄호로 나눌 시 여러 row를 추가하겠다는 의미
          {
            // 치환된 본문
            Content: finalContent,
            Title: title,
            Tags: tag,
            Category: category,
            Context: context,
            Thumbnail: finalThumbnailURL,
          },
        ]);
        if (insertError) throw insertError;

        reset();
        router.push('/?message=upload_success');
        router.refresh();
      } catch (error: any) {
        console.error(error.message);
        setToastMessage('업로드 중 오류가 발생했습니다');
      }
    } else {
      try {
        setToastPopup(true);
        setToastMessage('수정 중입니다...');

        // 본문 이미지 업로드 및 URL 치환
        let finalContent = content;
        const bucketName = 'Image';

        for (const [blobUrl, file] of pendingFiles.entries()) {
          // 본문에 해당 blob 주소가 남아있는 경우에만 업로드 진행
          if (finalContent?.includes(blobUrl)) {
            const fileName = `${Date.now()}_${file.name}`;
            const { data: uploadDate, error: uploadError } =
              await supabase.storage
                .from(bucketName)
                .upload(`Contents/${fileName}`, file);

            if (uploadError) {
              console.error('이미지 업로드 실패: ', uploadError.message);
              continue;
            }

            const { data: imageUrl } = supabase.storage
              .from(bucketName)
              .getPublicUrl(`Contents/${fileName}`);

            // 본문의 임시 blob 주소를 실제 퍼블릭 URL로 치환
            finalContent = finalContent.replaceAll(blobUrl, imageUrl.publicUrl);
          }
          // 메모리 해제
          URL.revokeObjectURL(blobUrl);
        }
        let finalThumbnailURL = null;
        if (thumbnail) {
          const file = thumbnail as File;
          const fileName = `${Date.now()}_${file.name}`;
          const bucketName = 'Image';
          const { error: thumbError } = await supabase.storage
            .from(bucketName)
            .upload(`Thumbnail/${fileName}`, file);

          if (thumbError) {
            console.error(thumbError);
          }

          const { data: thumbData } = supabase.storage
            .from(bucketName)
            .getPublicUrl(`Thumbnail/${fileName}`);

          finalThumbnailURL = thumbData.publicUrl;
        }

        const { error: insertError } = await supabase
          .from('Posts')
          .update([
            // 한 row에 들어가는 데이터는 중괄호 내부에 함께 입력. 중괄호로 나눌 시 여러 row를 추가하겠다는 의미
            {
              // 치환된 본문
              Content: finalContent,
              Title: title,
              Tags: tag,
              Category: category,
              Context: context,
              Thumbnail: finalThumbnailURL,
            },
          ])
          .eq('id', editId);
        if (insertError) throw insertError;

        reset();
        router.push('/?message=edit_success');
        router.refresh();
      } catch (error: any) {
        console.error(error.message);
        setToastMessage('수정 중 오류가 발생했습니다');
      }
    }
  };
  const handleCancel = () => {
    reset();
    router.push('/');
  };
  return (
    <>
      <div className="mt-2.5 flex justify-end gap-5">
        <button
          className="h-8 w-21.25 cursor-pointer rounded-[100px] bg-(--color-card)"
          name="저장"
          aria-label="저장"
          onClick={handleSave}
        >
          저장
        </button>
        <button
          className="h-8 w-21.25 cursor-pointer rounded-[100px] border border-(--color-card)"
          aria-label="취소"
          onClick={handleCancel}
        >
          취소
        </button>
      </div>
    </>
  );
}
