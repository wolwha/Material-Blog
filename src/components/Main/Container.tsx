'use client';
import { Posts } from '@/types/postType';
import PostCard from './PostCard';
import Toast from '../Common/Toast';
import { Suspense } from 'react';
import ToastHandler from '../Common/ToastHandler';
import { usePostStore } from '@/stores/postStore';

interface Props {
  posts: Posts[] | null;
}

export default function Container({ posts }: Props) {
  const { toastmessage, toastPopup } = usePostStore();
  return (
    <>
      <Suspense>
        <ToastHandler />
      </Suspense>

      <Toast message={toastmessage} toast={toastPopup} />

      <div className="my-5 flex w-full flex-col gap-y-3.75 px-5 select-none sm:grid sm:h-auto sm:grid-cols-1 sm:justify-center sm:gap-x-3.75 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {/* Post 데이터 맵핑 */}
        {posts?.length === 0
          ? '앗! 게시글이 존재하지 않네요'
          : posts?.map((post) => (
              <div key={post.id}>
                <PostCard
                  Title={post.Title}
                  Content={post.Content}
                  created_at={post.created_at}
                  Category={post.Category}
                  id={post.id}
                  Tags={post.Tags}
                  Thumbnail={post.Thumbnail}
                  Context={post.Context}
                />
              </div>
            ))}
      </div>
    </>
  );
}
