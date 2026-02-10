import { usePostStore } from '@/stores/postStore';
import Tag from './Tag';
import { useEffect, useState } from 'react';

export default function TagEdit() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const { setTag } = usePostStore();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTag = e.currentTarget.value.trim();
      if (newTag) {
        if (!tags.includes(newTag)) {
          setTags([...tags, newTag]);
          setTag([...tags, newTag]);
        }
      }
      setInputValue('');
    }
  };
  const handleAdd = () => {
    if (inputValue.trim() != '') {
      const newTags = [...tags, inputValue.trim()];
      setTags(newTags);
      setTag(newTags);
      setInputValue('');
    }
  };
  return (
    <>
      <div className="flex w-full gap-2.5">
        <input
          type="text"
          className="w-full rounded-[5px] border px-2.5 outline-0"
          placeholder="태그를 입력해주세요"
          onChange={handleInput}
          value={inputValue}
          onKeyDown={handleKeyDown}
          maxLength={10}
        />
        <button
          className="w-21.25 rounded-[10px] bg-(--color-card)"
          aria-label="태그 추가 버튼"
          onClick={handleAdd}
        >
          추가
        </button>
      </div>
      <div className="flex w-full gap-2.5">
        <p>태그: </p>
        <Tag />
      </div>
    </>
  );
}
