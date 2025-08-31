import PostCard from "../Main/PostCard";

export default function CategoryDetail() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex relative text-start mx-[25px] border-b-1 px-[20px] w-full">
          <p className="text-[32px] font-semibold">카테고리1</p>
        </div>
        <div className="grid mt-[12px] mx-[25px] grid-rows-2 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-[15px] gap-y-[20px] mb-[25px]">
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
