"use client";
import Link from "next/link";

export default function PostCard() {
  return (
    <>
      <Link href={"/post/1"}>
        <div className="w-[380px] h-[340px] rounded-[20px] bg-[var(--color-primary)] flex justify-center cursor-pointer hover:scale-103 hover:shadow-2xl transform transition-transform relative">
          <div className="mt-[20px]">
            <div className="w-[350px] h-[200px] rounded-[20px] bg-[#d9d9d9] relative">
              <span className="bg-[white] rounded-full py-[2px] px-[10px] absolute top-[5px] right-[5px]">
                카테고리
              </span>
            </div>
            <div className="gap-[10px] mt-[20px]">
              <p className="text-[26px] font-bold">제목</p>
              <p className="text-[16px]">내용</p>
              <p className="absolute right-[20px]">작성일</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
