import { usePostStore } from "@/stores/postStore";
import Tag from "../Tag";
import { useEffect, useState } from "react";


export default function TagEdit() {
  const [tags, setTags] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>("")
  const {tag, setTag} = usePostStore();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }
  const handleAdd = () => {
    if(inputValue.trim() != ""){
      const newTags = ([...tags, inputValue.trim()])
      setTags(newTags)
      setTag(newTags)
      setInputValue("")
    }
  }
  return (
    <>
      <div className="flex gap-2.5 w-full">
        <input type="text" className="w-full border rounded-[5px]" onChange={handleInput} value={inputValue} />
        <button className="w-21.25 rounded-[10px] bg-(--color-card)" aria-label="태그 추가 버튼" onClick={handleAdd}>
          추가
        </button>
      </div>
      <div className="flex gap-2.5 w-full">
        <p>태그: </p>
        <Tag />
      </div>
    </>
  );
}
