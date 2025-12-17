import Link from "next/link";
import PostCard from "../Main/PostCard";

export default function CategoryGroup() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex relative text-start mx-[25px] px-[20px] w-full">
          <div className="w-full border-b-1">
            <p className="text-[32px] font-semibold">카테고리1</p>
            <Link href={"/category/1"}>
              <button
                className="absolute right-[20px] bottom-0 hover:underline cursor-pointer"
                name="더보기 버튼"
                aria-label="더보기 버튼"
              >
                더보기
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:grid sm:gap-x-[15px] gap-y-[20px] sm:justify-center my-[30px] sm:h-auto 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 select-none w-full px-[16px] flex flex-col sm:w-auto">
          {/* 기능개발시 grid rows는 2줄까지 설정 */}
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </>
  );
}
