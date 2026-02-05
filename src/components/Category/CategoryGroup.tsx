import Link from 'next/link';
import PostCard from '../Main/PostCard';
import { PostProps, Posts } from '@/types/postType';
import { useState } from 'react';

interface CategoryGroup {
  name: string;
  list: Posts[];
}

export default function CategoryGroup({ name, list }: CategoryGroup) {
  return (
    <>
      <div className="flex w-full flex-col items-start justify-start">
        <div className="relative flex w-full px-5 text-start">
          <div className="w-full border-b">
            <p className="text-[32px] font-semibold">{name}</p>
            <Link href={`/category/${name}`}>
              <button
                className="absolute right-5 bottom-0 cursor-pointer hover:underline"
                name="더보기 버튼"
                aria-label="더보기 버튼"
              >
                더보기
              </button>
            </Link>
          </div>
        </div>
        <div className="my-7.5 flex w-full flex-col gap-y-5 px-4 select-none sm:grid sm:h-auto sm:w-full sm:grid-cols-1 sm:gap-x-3.75 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {/* 기능개발시 grid rows는 2줄까지 설정 */}
          {list.map((post) => (
            <PostCard
              Title={post.Title}
              Content={post.Content}
              id={post.id}
              created_at={post.created_at}
              Tags={post.Tags}
              Thumbnail={post.Thumbnail}
              key={post.id}
              Category={post.Category}
              Context={post.Context}
            />
          ))}
        </div>
      </div>
    </>
  );
}
