'use client';

import { getSearchData } from '@/services/searchService';
import { useSearchStore } from '@/stores/searchStore';
import { SearchType } from '@/types/searchType';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdOutlineClose, MdSearch } from 'react-icons/md';
import PostCard from '../Main/PostCard';

export default function ResultPage() {
  const params = useParams();
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<SearchType | null>(null);
  const { setParam, param } = useSearchStore();
  const router = useRouter();
  const rawKeyword = params.searchid;
  const keyword =
    typeof rawKeyword === 'string' ? decodeURIComponent(rawKeyword) : '';
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    console.log(value);
    setParam(value);
    router.push(`/search/${encodeURIComponent(value)}`);
    setValue('');
  };
  useEffect(() => {
    if (param) {
      setValue(param);
    } else if (keyword) {
      setValue(keyword);
    }
  }, [param]);

  useEffect(() => {
    const fetchData = async () => {
      if (!keyword) return;
      try {
        const data = await getSearchData(keyword);
        setResult(data);
        console.log(data);
      } catch (error) {
        console.error('데이터 요청 실패: ', error);
      }
    };
    fetchData();
  }, [keyword]);

  return (
    <>
      <div className="flex w-full flex-col px-2.5">
        <div className="flex w-full pt-2 pb-4">
          <form className="relative flex w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              className="h-17.5 w-full rounded-full border-2 px-5 text-[20px] font-semibold outline-0"
              placeholder="검색어를 입력해주세요"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <button
              className="absolute right-5 flex size-12.5 cursor-pointer text-center text-[70px]"
              type="submit"
            >
              <MdSearch />
            </button>
            {value === '' ? null : (
              <button
                className="absolute top-3.5 right-18 flex size-12.5 cursor-pointer text-center text-[40px]"
                onClick={() => setValue('')}
                type="button"
              >
                <MdOutlineClose />
              </button>
            )}
          </form>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full justify-start px-4.5 py-10">
            <p className="text-[32px] font-bold">{keyword}의 검색 결과</p>
          </div>
          {result?.toTag.length !== 0 ? (
            <>
              <div className="relative mx-6.25 flex w-full border-b px-5 text-start">
                <p className="text-[24px] font-semibold">태그</p>
                <button
                  className="absolute right-5 bottom-0 cursor-pointer hover:underline"
                  name="더보기 버튼"
                  aria-label="더보기 버튼"
                >
                  더보기
                </button>
              </div>
              <div className="mx-6.25 mt-3 mb-6.25 grid w-full grid-rows-2 gap-x-3.75 gap-y-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {/* 기능개발시 grid rows는 2줄까지 설정 */}
                {result?.toTag.slice(0, 8).map((post) => (
                  <PostCard
                    Title={post.Title}
                    Category={post.Category}
                    Tags={post.Tags}
                    created_at={post.created_at}
                    id={post.id}
                    Content={post.Content}
                    Context={post.Context}
                    Thumbnail={post.Thumbnail}
                    key={post.id}
                  />
                ))}
              </div>
            </>
          ) : null}
          {result?.toCategory.length !== 0 ? (
            <>
              <div className="relative mx-6.25 flex w-full border-b px-5 text-start">
                <p className="text-[24px] font-semibold">카테고리</p>
                <button
                  className="absolute right-5 bottom-0 cursor-pointer hover:underline"
                  name="더보기 버튼"
                  aria-label="더보기 버튼"
                >
                  더보기
                </button>
              </div>
              <div className="mx-6.25 mt-3 mb-6.25 grid w-full grid-rows-2 gap-x-3.75 gap-y-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {/* 기능개발시 grid rows는 2줄까지 설정 */}
                {result?.toCategory.slice(0, 8).map((post) => (
                  <PostCard
                    Title={post.Title}
                    Category={post.Category}
                    Tags={post.Tags}
                    created_at={post.created_at}
                    id={post.id}
                    Content={post.Content}
                    Context={post.Context}
                    Thumbnail={post.Thumbnail}
                    key={post.id}
                  />
                ))}
              </div>
            </>
          ) : null}
          {result?.toTitle.length !== 0 ? (
            <>
              <div className="relative mx-6.25 flex w-full border-b px-5 text-start">
                <p className="text-[24px] font-semibold">제목</p>
                <button
                  className="absolute right-5 bottom-0 cursor-pointer hover:underline"
                  name="더보기 버튼"
                  aria-label="더보기 버튼"
                >
                  더보기
                </button>
              </div>
              <div className="mx-6.25 mt-3 mb-6.25 grid w-full gap-x-3.75 gap-y-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {/* 기능개발시 grid rows는 2줄까지 설정 */}
                {result?.toTitle.slice(0, 8).map((post) => (
                  <PostCard
                    Title={post.Title}
                    Category={post.Category}
                    Tags={post.Tags}
                    created_at={post.created_at}
                    id={post.id}
                    Content={post.Content}
                    Context={post.Context}
                    Thumbnail={post.Thumbnail}
                    key={post.id}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
