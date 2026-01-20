'use client'
import { PostProps } from "@/types/postType";
import Content from "./Content";
import MainImage from "./MainImage";
import PostContainer from "./PostContainer";
import Title from "./Title";


export default function Post ({postData}: PostProps) {
  return (
    <>
      <div className="sm:flex sm:justify-center w-full">
        <div className="flex justify-center">
          <div className="pt-62.5">
          <div className="sm:w-37.5 sm:flex flex-col justify-center sm:pl-12.5 sticky h-full top-50 min-h-25 py-5 hidden">
          </div>
          </div>
          <div className="flex flex-col gap-5">
            {/* 제목과 대표사진 */}
            <div className="flex flex-col sm:flex-row sm:mt-5 sm:gap-2.5 justify-center items-center">
              <Title title={postData.Title} date={postData.created_at} category={postData.Category} />
              <MainImage thumbnail={postData.Thumbnail} title={postData.Title} />
            </div>
            {/* 내용과 목차 */}
            <div className="flex h-full justify-center">
              {/* <div className="sm:w-[150px] h-full"></div> */}
              <div className="flex flex-col gap-5 w-full">
                <div className="flex w-full">
                  <PostContainer content={postData.Content} />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-62.5">
              <Content />
          </div>
        </div>
      </div>
    </>
  );
}
