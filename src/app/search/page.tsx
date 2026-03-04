'use client';
import { useSearchStore } from '@/stores/searchStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdOutlineClose, MdSearch } from 'react-icons/md';

export default function page() {
  const [value, setValue] = useState<string>('');
  const { setParam } = useSearchStore();
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    if (!value.trim()) return;
    setParam(value);
    router.push(`/search/${encodeURIComponent(value)}`);
    setValue('');
  };
  return (
    <>
      <div className="h-[calc(100vh-160px)] w-full px-2.5 sm:h-full">
        <div className="flex w-full">
          <form className="relative flex w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              className="mt-2 h-17.5 w-full rounded-full border-2 px-5 text-[20px] font-semibold outline-0"
              placeholder="검색어를 입력해주세요"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            {value !== '' ? (
              <button
                className="absolute top-6 right-18 flex size-12.5 cursor-pointer text-center text-[40px]"
                onClick={() => setValue('')}
                type="button"
              >
                <MdOutlineClose />
              </button>
            ) : null}
            <button
              className="absolute top-2 right-5 flex size-12.5 cursor-pointer text-center text-[70px]"
              type="submit"
            >
              <MdSearch />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
