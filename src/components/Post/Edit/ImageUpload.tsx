"use client"
import Image from "next/image";
import DefaultThumbnail from "@/assets/PostThumbnail.png"
import { useRef, useState } from "react";
import { usePostStore } from "@/stores/postStore";
import { resizeImage } from "@/utils/imageResizer";

export default function ImageUpload () {
  const [preview, setPreview] = useState<string | null>(null)
  const imageRef = useRef<HTMLInputElement>(null);
  const {setThumbnail} = usePostStore();
  const handleUpload = () => {
    imageRef?.current?.click();
    
  }
  const handleUploaded = async (e:React.ChangeEvent<HTMLInputElement>) => {
    // 임시 업로드된 이미지
    if(e.target.files && e.target.files.length > 0){
      const selectedImage = e.target.files[0]
      if(selectedImage != null){
        const resizedImage = await resizeImage(selectedImage, 1200)
        setThumbnail(resizedImage)
        setPreview(URL.createObjectURL(resizedImage))
      }
    }
  }
  const handleRemove = () => {
    // 프리뷰 이미지를 메모리에서 해제
    if(preview){
      URL.revokeObjectURL(preview)
    }
    setThumbnail(null);
    setPreview(null);

    // input의 value를 지워서 같은 파일을 다시 올릴 때 onChange가 발생하도록 함.
    if(imageRef.current){
      imageRef.current.value = ""
    }
  }
  return (
    <>
      <div className="relative sm:w-77.5 sm:h-55 bg-gray-300 sm:rounded-[20px] w-full h-35 overflow-hidden justify-center flex items-center">
        <div className="z-10 relative">
          <div className="flex flex-col gap-5">
            <button className="bg-(--color-gray) px-2 rounded-lg cursor-pointer" onClick={handleUpload}>이미지 첨부</button>
            {preview != null ? <button className="bg-(--color-gray) px-2 rounded-lg cursor-pointer" onClick={handleRemove}>이미지 제거</button> : null}
          </div>
          <form>
            <input type="file" accept="image/jpg, image/jpeg, image/png, image/webp" className="hidden" ref={imageRef} onClick={(e) => e.currentTarget.value = ""} onChange={handleUploaded} />
            {/* onClick: 이전 이미지 데이터 제거 */}
          </form>
        </div>
        <Image
          src={preview ?? DefaultThumbnail}
          fill
          alt="게시글 썸네일"
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, 310px" 
          priority={true}
        />
        <div className="absolute inset-0 bg-black/20 z-0"></div>
      </div>
    </>
  );
}
