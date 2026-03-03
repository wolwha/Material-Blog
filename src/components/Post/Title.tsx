'use client';
import { usePostStore } from '@/stores/postStore';
import { useAuthStore } from '@/stores/userStore';
import { createClient } from '@/utils/supabase/client';
import { useParams, useRouter } from 'next/navigation';
import { MdDelete, MdEdit } from 'react-icons/md';

interface titleTabData {
  title: string;
  date: string;
  category: string;
  tags: string[];
}

export default function Title({ title, date, category }: titleTabData) {
  const param = useParams<{ postid: string }>();
  const router = useRouter();
  const supabase = createClient();
  // 날짜 형식으로 변환
  const postDate = new Date(date);
  const { setToastMessage } = usePostStore();
  // 상태 관리에서 로그인 여부 받아오기
  const { isAuthenticated } = useAuthStore();
  const handleDelete = async () => {
    try {
      const { error: deleteError } = await supabase
        .from('Posts')
        .delete()
        .eq('id', param.postid)
        .select();

      if (deleteError) throw deleteError;
      router.push('/?message=delete_success');
    } catch (error) {
      console.error(error);
      setToastMessage('삭제 중 오류가 발생했습니다');
    }
  };
  return (
    <>
      <div className="relative flex w-full items-center justify-start bg-(--color-card) sm:h-55 sm:min-w-95 sm:rounded-[20px] sm:px-8">
        <div className="ml-5">
          <p className="text-[16px]">
            {postDate.getFullYear() +
              '.' +
              (postDate.getMonth() + 1).toLocaleString().padStart(2, '0') +
              '.' +
              postDate.getDate().toLocaleString().padStart(2, '0')}
          </p>
          <p className="text-[36px] font-semibold">{title}</p>
          <p className="text-[16px]">{category}</p>
        </div>
        <div className="right-5 bottom-5 hidden gap-2.5 sm:absolute sm:flex">
          {isAuthenticated === true ? (
            <button
              className="flex size-7.5 cursor-pointer items-center justify-center rounded-[10px] bg-(--color-primary)"
              aria-label="수정 버튼"
              name="수정 버튼"
            >
              <MdEdit className="text-white" />
            </button>
          ) : null}
          {/* 로그인이 안되어있으면 버튼 숨기기 */}
          {isAuthenticated === true ? (
            <button
              className="flex size-7.5 cursor-pointer items-center justify-center rounded-[10px] bg-(--color-primary)"
              name="삭제 버튼"
              aria-label="삭제 버튼"
              onClick={handleDelete}
            >
              <MdDelete className="text-white" />
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
