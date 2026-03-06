'use client';
import { usePostStore } from '@/stores/postStore';
import { MdOutlineClose } from 'react-icons/md';

export default function Tag() {
  const { tag, setTag } = usePostStore();
  const handleDelete = (idx: number) => {
    if (!tag) return;
    const newTags = tag.filter((_, index) => index !== idx);
    // idx와 다른 값의 index를 가진 요소만 통과시켜 배열의 앝은 복사본 생성
    setTag(newTags);
  };
  return (
    <>
      {tag?.map((i, idx) => (
        <div
          className="flex w-auto items-center justify-center rounded-[5px] bg-[#d9d9d9] px-1.25 text-center"
          key={`${i}-${idx}`}
        >
          <p>#{i}</p>
          <button
            className="ml-0.75 cursor-pointer text-center"
            aria-label="태그 삭제 버튼"
            onClick={() => handleDelete(idx)}
          >
            <MdOutlineClose />
          </button>
        </div>
      ))}
    </>
  );
}
