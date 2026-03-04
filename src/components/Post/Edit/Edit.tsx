'use client';
import 'react-quill-new/dist/quill.snow.css';
import TitleEdit from './TitleEdit';
import PostEdit from './PostEdit';
import Button from './Button';
import TagEdit from './TagEdit';
import ImageUpload from './ImageUpload';
import Toast from '@/components/Common/Toast';
import { usePostStore } from '@/stores/postStore';
import { useEffect } from 'react';
import { PostType } from '@/types/postType';

export default function Edit({
  editData,
  isEdit,
}: {
  editData?: PostType;
  isEdit?: boolean;
}) {
  const { toastmessage, toastPopup, setToastPopup, reset } = usePostStore();

  useEffect(() => {
    if (setToastPopup) {
      const timer = setTimeout(() => setToastPopup(false), 3000);
      // 컴포넌트가 언마운트 되거나 다음 효과가 실행되기 전 타이머 정리
      return () => clearTimeout(timer);
    }
  }, [toastPopup]);

  useEffect(() => {
    return () => {
      reset();
    };
    // 언마운트시 초기화
  }, [reset]);

  return (
    <>
      <div className="relative hidden w-full justify-center sm:flex">
        <div className="flex flex-col items-end gap-2.5">
          {/* 제목과 대표사진 */}
          <div className="mt-5 flex items-center justify-center gap-2.5">
            <TitleEdit
              editTitle={editData?.Title}
              editCategory={editData?.Category}
              editContext={editData?.Context}
            />
            {/* 이미지 삽입부분으로 변경 */}
            <ImageUpload editImage={editData?.Thumbnail} />
          </div>
          <div className="w-[870px] flex flex-col gap-2">
            {/* 내용 입력 에리어 */}
            <PostEdit editContent={editData?.Content} />
            <TagEdit editTag={editData?.Tags} />
            <Button isEdit={isEdit} editId={editData?.id} />
          </div>
        </div>
        <Toast message={toastmessage} toast={toastPopup} />
      </div>
      <div className="flex h-[calc(100vh-125px)] items-center justify-center text-center sm:hidden">
        <p>
          게시글 작성은 PC에서 가능합니다.
          <br />
          PC로 접속해 주세요.
        </p>
      </div>
    </>
  );
}
