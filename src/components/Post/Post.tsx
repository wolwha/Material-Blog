'use client'
import { PostProps } from "@/types/postType";
import Content from "./Content";
import MainImage from "./MainImage";
import PostContainer from "./PostContainer";
import Title from "./Title";


export default function Post ({postData}: PostProps) {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        {/* 제목과 대표사진 */}
        <div className="flex flex-col sm:flex-row sm:mt-[20px] sm:gap-[10px] justify-center items-center">
          <Title title={postData.Title} date={postData.created_at} category={postData.Category} />
          <MainImage thumbnail={postData.Thumbnail} title={postData.Title} />
        </div>
        {/* 내용과 목차 */}
        <div className="flex h-full justify-center">
          {/* <div className="sm:w-[150px] h-full"></div> */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex w-full sm:ml-[30px] mx-[10px]">
              <PostContainer content={postData.Content} />
            </div>
          </div>
          <div className="sm:ml-[30px]">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}
