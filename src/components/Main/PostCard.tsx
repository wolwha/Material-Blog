"use client";
import Link from "next/link";

export default function PostCard() {
  return (
    <>
      <Link href={"/post/1"}>
        <div className="sm:w-[380px] sm:h-[340px] w-[100vw - 32px] px-[16px] rounded-[20px] bg-[#f4effc] flex justify-center cursor-pointer hover:scale-103 hover:shadow-2xl transform transition-transform relative pb-[40px]">
          <div className="mt-[20px] w-full">
            {/* 포스트 이미지 에리어 */}
            <div className="sm:w-[350px] h-[200px] rounded-[20px] bg-[#d9d9d9] relative">
              <span className="bg-[white] rounded-full py-[2px] px-[10px] absolute top-[5px] right-[5px]">
                카테고리
              </span>
            </div>
            <div className="sm:gap-[10px] sm:mt-[20px] mt-[20px]">
              <p className="sm:text-[26px] text-[20px] font-bold">제목</p>
              <p className="text-[16px]">내용</p>
              <p className="absolute right-[20px] text-[16px]">작성일</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
