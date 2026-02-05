import Link from 'next/link';
import { MdEdit } from 'react-icons/md';

export default function EditButton() {
  return (
    <>
      <Link href={'/post/edit'} aria-label="글쓰기 페이지로 이동">
        <div
          className="fixed right-17.5 bottom-10 z-50 hidden size-15 cursor-pointer items-center justify-center rounded-[20px] bg-(--color-card) shadow-md shadow-gray-700 hover:bg-(--color-primary) sm:flex"
          aria-label="Edit"
        >
          <MdEdit size={20} />
        </div>
      </Link>
    </>
  );
}
