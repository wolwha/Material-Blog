'use client';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';

interface SearchInputProps {
  onSubmit: (value: string) => void;
}

export default function page() {
  const [value, setValue] = useState<string>('');
  const SearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue('');
  };
  return (
    <>
      <div className="w-full px-2.5 sm:px-50">
        <div className="flex w-full">
          <form className="relative flex w-full">
            <input
              type="text"
              className="mt-7.5 h-17.5 w-full rounded-full border-2 px-5 text-[20px] font-semibold outline-0"
              placeholder="검색어를 입력해주세요"
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={() => handleKeyDown}
              value={value}
            />
            <button
              className="absolute top-7.5 right-5 flex size-12.5 cursor-pointer text-center text-[70px]"
              onClick={() => SearchInput}
            >
              <MdSearch />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
