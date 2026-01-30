"use client"
import { Posts } from "@/types/postType";
import PostCard from "./PostCard";
import Toast from "../Common/Toast";
import { Suspense } from "react";
import ToastHandler from "../Common/ToastHandler";
import { usePostStore } from "@/stores/postStore";

interface Props {
  posts: Posts[] | null;
}

export default function Container({posts}: Props) {
  const {toastmessage, toastPopup} = usePostStore();
  return (
    <>
      <Suspense>
        <ToastHandler/>
      </Suspense>

      <Toast message={toastmessage} toast={toastPopup}/>

      <div className="sm:grid sm:gap-x-3.75 gap-y-3.75 sm:justify-center my-5 sm:h-auto 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 select-none w-full px-5 flex flex-col">
        {/* Post 데이터 맵핑 */}
        {posts?.length === 0 ? "앗! 게시글이 존재하지 않네요" : (posts?.map((post) => (
          <div key={post.id}>
            <PostCard Title={post.Title} Content={post.Content} created_at={post.created_at} Category={post.Category} id={post.id} Tags={post.Tags} Thumbnail={post.Thumbnail} Context={post.Context} />
          </div>
        )))}
      </div>
    </>
  );
}
