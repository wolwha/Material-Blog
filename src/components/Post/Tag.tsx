import { MdOutlineClose } from "react-icons/md";

export default function Tag() {
  return (
    <>
      <div className="w-auto rounded-[5px] bg-[#d9d9d9] px-1.25 flex justify-center text-center items-center">
        <p>#태그</p>
        <button className="ml-0.75 cursor-pointer text-center" aria-label="태그 버튼">
          <MdOutlineClose />
        </button>
      </div>
    </>
  );
}
