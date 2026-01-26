"use client";
import { Posts } from "@/types/postType";
import DefaultThumbnail from "@/assets/PostThumbnail.png"
import Link from "next/link";
import Image from "next/image";

export default function PostCard({Title, Content, created_at, Category, id, Tags, Thumbnail, Context}: Posts) {
  const day = new Date(created_at)
  return (
    <>
      <Link href={`/post/${id}`} aria-label={`${Title} 게시글로 이동`}>
        <div className="sm:w-auto sm:h-auto w-[100vw-32px] py-4 px-4 rounded-2xl bg-(--color-card) flex justify-center items-center cursor-pointer hover:scale-103 hover:shadow-2xl hover:bg-(--color-card-hover) transform transition-all relative">
          <div className="w-full">
            {/* 포스트 이미지 에리어 */}
            {/* rounded가 이미지에도 적용되려면 overflow-hidden이 필요합니다 */}
            <div className="sm:w-auto h-50 rounded-2xl bg-[#d9d9d9] relative overflow-hidden">
              <div className="bg-(--color-custom-white) rounded-2xl px-2.5 absolute top-2.5 right-2.5 z-10 text-center flex justify-center items-center">
              <p>{Category}</p>
              </div>
              
              {/* [수정 부분] Image 컴포넌트 사용 */}
              <Image
                // Thumbnail이 있으면(true) 그걸 쓰고, 없으면(null/false) DefaultThumbnail 사용
                src={Thumbnail ? Thumbnail : DefaultThumbnail} 
                alt={`${Title} 썸네일`}
                fill // 부모 div(relative)에 꽉 차게 설정
                className="object-cover" // 이미지 비율 유지하며 꽉 채우기
                sizes="(max-width: 768px) 100vw, 350px" // 성능 최적화용 사이즈 힌트
                priority={true} // 필요에 따라 true 설정 (LCP 최적화)
              />
            </div>
            <div className="sm:gap-2.5 sm:mt-2.5 mt-2.5">
              <p className="sm:text-[26px] text-[20px] font-bold">{Title}</p>
              {Context != null ? <p className="text-[16px] truncate">{Context}</p> : <div className="h-6.5"></div>}
              <p className="absolute right-5 text-[16px]">{day.getFullYear() + "." + (day.getMonth() + 1).toString().padStart(2, '0') + "." +day.getDate().toString().padStart(2, "0")}</p>
            </div>
            <div className="h-5 pt-1">
              <p className="text-sm">{Tags && Tags.length > 0 ? Tags.slice(0, 2).map((tag, idx) => <span className="w-auto rounded-[5px] bg-(--color-gray) px-1.25 justify-center text-center items-center mr-1" key={idx}>
                #{tag}
                {/* map 안에서 span 엘리먼트에 문자열을 추가하면 객체가 강제로 문자열로 변환되면서 object로 출력된다. */}
              </span>) : null}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
