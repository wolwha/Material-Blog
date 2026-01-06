"use client"
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import PostCard from "./PostCard";

interface Props {
  posts: any[] | null; // 혹은 구체적인 타입 (Example: PostType[])
}

export default function Container({posts}: Props) {
  return (
    <>
      <div className="sm:grid sm:gap-x-[15px] gap-y-[20px] sm:justify-center my-[30px] sm:h-auto 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 select-none w-full px-[16px] flex flex-col">
        {/* <PostCard />
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
        <PostCard /> */}
        {posts?.map((_, idx) => (
          <div key={idx}>
            <PostCard title={posts[idx].Title} content={posts[idx].Content} date={posts[idx].created_at} category={posts[idx].Category} id={posts[idx].id} tags={posts[idx].Tags} thumbnail={posts[idx].Thumbnail}/>
          </div>
        ))}
      </div>
    </>
  );
}
