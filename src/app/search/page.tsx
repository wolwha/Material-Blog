import { MdSearch } from 'react-icons/md';

export default function page() {
  return (
    <>
      <div className="w-full px-2.5 sm:px-50">
        <div className="relative flex w-full">
          <input
            type="text"
            className="mt-7.5 h-17.5 w-full rounded-full border-2 px-5 text-[20px] font-semibold outline-0"
            placeholder="검색어를 입력해주세요"
          />
          <button className="absolute top-7.5 right-5 flex size-12.5 cursor-pointer text-center text-[70px]">
            <MdSearch />
          </button>
        </div>
      </div>
    </>
  );
}
