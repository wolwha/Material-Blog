import Image from "next/image";
import DefaultThumbnail from "@/assets/PostThumbnail.png"

interface MainImageProps{
  thumbnail: string | null
  title: string
}

export default function MainImage({thumbnail, title}: MainImageProps) {
  return (
    <>
<div className="relative sm:w-[310px] sm:h-[220px] bg-gray-500 sm:rounded-[20px] w-full h-[140px] overflow-hidden">
  {/* 1. 부모 div에 'relative'를 추가했습니다. (fill 사용 시 필수)
      2. 불필요한 justify-center items-center는 제거했습니다. (이미지 자체 속성으로 제어)
  */}
  <Image
    // Thumbnail이 있으면(true) 그걸 쓰고, 없으면(null/false) DefaultThumbnail 사용
    src={thumbnail ? thumbnail : DefaultThumbnail}
    alt={`${title}썸네일`}

    fill // [중요 1] 부모 컨테이너를 가득 채웁니다.

    // [중요 2] object-cover와 함께 object-center를 사용하여 가운데를 기준으로 자릅니다.
    className="object-cover object-center"
    
    // sizes는 브라우저가 적절한 이미지 크기를 선택하도록 돕습니다.
    // sm 브레이크포인트(보통 640px) 기준으로 설정하는 것이 좋습니다.
    sizes="(max-width: 640px) 100vw, 310px" 
    priority={false}
  />
</div>
    </>
  );
}
