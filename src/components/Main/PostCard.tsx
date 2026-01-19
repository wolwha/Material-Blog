"use client";
import { Posts } from "@/types/postType";
import DefaultThumbnail from "@/assets/PostThumbnail.png"
import Link from "next/link";
import Image from "next/image";

export default function PostCard({Title, Content, created_at, Category, id, Tags, Thumbnail}: Posts) {
  const day = new Date(created_at)
  return (
    <>
      <Link href={`/post/${id}`} aria-label={`${Title} 게시글로 이동`}>
        <div className="sm:w-[380px] sm:h-[340px] w-[100vw-32px] px-[16px] rounded-[20px] bg-[#f4effc] flex justify-center cursor-pointer hover:scale-103 hover:shadow-2xl transform transition-transform relative pb-[40px]">
          <div className="mt-[20px] w-full">
            {/* 포스트 이미지 에리어 */}
            {/* rounded가 이미지에도 적용되려면 overflow-hidden이 필요합니다 */}
            <div className="sm:w-[350px] h-[200px] rounded-[20px] bg-[#d9d9d9] relative overflow-hidden">
              <span className="bg-[white] rounded-full py-[2px] px-[10px] absolute top-[5px] right-[5px] z-10">
                {Category}
              </span>
              
              {/* [수정 부분] Image 컴포넌트 사용 */}
              <Image
                // Thumbnail이 있으면(true) 그걸 쓰고, 없으면(null/false) DefaultThumbnail 사용
                src={Thumbnail ? Thumbnail : DefaultThumbnail} 
                alt={`${Title} 썸네일`}
                fill // 부모 div(relative)에 꽉 차게 설정
                className="object-cover" // 이미지 비율 유지하며 꽉 채우기
                sizes="(max-width: 768px) 100vw, 350px" // 성능 최적화용 사이즈 힌트
                priority={false} // 필요에 따라 true 설정 (LCP 최적화)
              />
            </div>
            <div className="sm:gap-[10px] sm:mt-[20px] mt-[20px]">
              <p className="sm:text-[26px] text-[20px] font-bold">{Title}</p>
              <p className="text-[16px] truncate">{Content}</p>
              <p className="absolute right-[20px] text-[16px]">{day.getFullYear() + "." + (day.getMonth() + 1).toString().padStart(2, '0') + "." +day.getDate().toString().padStart(2, "0")}</p>
            </div>
            <div>
              <span>
                {Tags}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
