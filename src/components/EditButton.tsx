import { MdEdit } from "react-icons/md";

export default function EditButton() {
  return (
    <>
      <button
        className="size-[60px] flex justify-center items-center rounded-[20px] bg-[var(--color-primary)] fixed right-[70px] bottom-[40px] z-[50] shadow-md shadow-gray-700"
        aria-label="Edit"
      >
        <MdEdit size={20} />
      </button>
    </>
  );
}
