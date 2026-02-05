'use client';
import { Posts } from '@/types/postType';
import DefaultThumbnail from '@/assets/PostThumbnail.png';
import Link from 'next/link';
import Image from 'next/image';

export default function PostCard({
  Title,
  Content,
  created_at,
  Category,
  id,
  Tags,
  Thumbnail,
  Context,
}: Posts) {
  const day = new Date(created_at);
  return (
    <>
      <Link href={`/post/${id}`} aria-label={`${Title} 게시글로 이동`}>
        <div className="relative flex w-[100vw-32px] transform cursor-pointer items-center justify-center rounded-2xl bg-(--color-card) px-4 py-4 transition-all hover:scale-103 hover:bg-(--color-card-hover) hover:shadow-2xl sm:h-auto sm:w-auto">
          <div className="w-full">
            {/* 포스트 이미지 에리어 */}
            {/* rounded가 이미지에도 적용되려면 overflow-hidden이 필요합니다 */}
            <div className="relative h-50 overflow-hidden rounded-2xl bg-[#d9d9d9] sm:w-auto">
              <div className="absolute top-2.5 right-2.5 z-10 flex items-center justify-center rounded-2xl bg-(--color-custom-white) px-2.5 text-center">
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
                unoptimized={true}
              />
            </div>
            <div className="mt-2.5 sm:mt-2.5 sm:gap-2.5">
              <p className="text-[20px] font-bold sm:text-[26px]">{Title}</p>
              {Context != null ? (
                <p className="truncate text-[16px]">{Context}</p>
              ) : (
                <div className="h-6.5"></div>
              )}
              <p className="absolute right-5 text-[16px]">
                {day.getFullYear() +
                  '.' +
                  (day.getMonth() + 1).toString().padStart(2, '0') +
                  '.' +
                  day.getDate().toString().padStart(2, '0')}
              </p>
            </div>
            <div className="h-5 pt-1">
              <p className="text-sm">
                {Tags && Tags.length > 0
                  ? Tags.slice(0, 2).map((tag, idx) => (
                      <span
                        className="mr-1 w-auto items-center justify-center rounded-[5px] bg-(--color-gray) px-1.25 text-center"
                        key={idx}
                      >
                        #{tag}
                        {/* map 안에서 span 엘리먼트에 문자열을 추가하면 객체가 강제로 문자열로 변환되면서 object로 출력된다. */}
                      </span>
                    ))
                  : null}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
