"use client"
import { Posts } from "@/types/postType";
import PostCard from "./PostCard";

interface Props {
  posts: Posts[] | null;
}

export default function Container({posts}: Props) {
  return (
    <>
      <div className="sm:grid sm:gap-x-[15px] gap-y-[15px] sm:justify-center my-[20px] sm:h-auto 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 select-none w-full px-[20px] flex flex-col">
        {/* Post 데이터 맵핑 */}
        {posts?.map((_, idx) => (
          <div key={idx}>
            <PostCard Title={posts[idx].Title} Content={posts[idx].Content} created_at={posts[idx].created_at} Category={posts[idx].Category} id={posts[idx].id} Tags={posts[idx].Tags} Thumbnail={posts[idx].Thumbnail}/>
          </div>
        ))}
      </div>
    </>
  );
}
