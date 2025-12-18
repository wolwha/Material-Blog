import Link from "next/link";
import { MdEdit } from "react-icons/md";

export default function EditButton() {
  return (
    <>
      <Link href={"/post/edit"}>
        <button
          className="size-[60px] sm:flex justify-center items-center rounded-[20px] bg-[var(--color-primary)] fixed right-[70px] bottom-[40px] z-[50] shadow-md shadow-gray-700 cursor-pointer hidden"
          aria-label="Edit"
        >
          <MdEdit size={20} />
        </button>
      </Link>
    </>
  );
}
