import { MdSearch } from "react-icons/md";

export default function page() {
  return (
    <>
      <div className="w-full sm:px-50 px-2.5">
        <div className="w-full relative flex">
          <input
            type="text"
            className="w-full h-17.5 border-2 rounded-full mt-7.5 px-5 text-[20px] font-semibold outline-0"
            placeholder="검색어를 입력해주세요"
          />
          <button className="absolute right-5 size-12.5 text-[70px] flex text-center top-7.5 cursor-pointer">
            <MdSearch />
          </button>
        </div>
      </div>
    </>
  );
}
