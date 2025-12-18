"use client"
import PostCard from "./PostCard";

export default function Container() {
  return (
    <>
      <div className="sm:grid sm:gap-x-[15px] gap-y-[20px] sm:justify-center my-[30px] sm:h-auto 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 select-none w-full px-[16px] flex flex-col">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}
