import Link from "next/link";
import { MdEdit } from "react-icons/md";

export default function EditButton() {
  return (
    <>
      <Link href={"/post/edit"} aria-label="글쓰기 페이지로 이동">
        <div
          className="size-15 sm:flex justify-center items-center rounded-[20px] bg-(--color-card) hover:bg-(--color-primary) fixed right-17.5 bottom-10 z-50 shadow-md shadow-gray-700 cursor-pointer hidden"
          aria-label="Edit"
        >
          <MdEdit size={20} />
        </div>
      </Link>
    </>
  );
}
