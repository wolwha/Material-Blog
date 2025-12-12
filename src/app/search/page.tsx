import { MdSearch } from "react-icons/md";

export default function page() {
  return (
    <>
      <div className="w-full sm:px-[200px] px-[10px]">
        <div className="w-full relative flex">
          <input
            type="text"
            className="w-full h-[70px] border-2 rounded-full mt-[30px] px-[20px] text-[20px] font-semibold"
            placeholder="검색어를 입력해주세요"
          />
          <button className="absolute right-[20px] size-[50px] text-[70px] flex text-center top-[30px] cursor-pointer">
            <MdSearch />
          </button>
        </div>
      </div>
    </>
  );
}
