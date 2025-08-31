import { MdOutlineClose } from "react-icons/md";

export default function Tag() {
  return (
    <>
      <div className="w-auto rounded-[5px] bg-[#d9d9d9] px-[5px] flex justify-center text-center items-center">
        <p># 태그</p>
        <button className="ml-[3px] cursor-pointer text-center">
          <MdOutlineClose />
        </button>
      </div>
    </>
  );
}
