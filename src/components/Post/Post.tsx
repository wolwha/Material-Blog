'use client';
import { PostProps } from '@/types/postType';
import Content from './Content';
import MainImage from './MainImage';
import PostContainer from './PostContainer';
import Title from './Title';
import { ReactNode } from 'react';
import Tags from './Tags';

export default function Post({
  postData,
  children,
}: PostProps & { children: ReactNode }) {
  return (
    <>
      <div className="sm:flex sm:w-full sm:justify-center">
        <div className="flex w-full justify-center">
          <div className="hidden pt-62.5 xl:flex">
            <div className="sticky top-50 hidden h-full min-h-25 flex-col justify-center py-5 sm:flex sm:w-37.5 sm:pl-12.5"></div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            {/* 제목과 대표사진 */}
            <div className="flex w-100vw flex-col items-center justify-center sm:mt-5 sm:flex-row sm:gap-2.5">
              <Title
                title={postData.Title}
                date={postData.created_at}
                category={postData.Category}
                tags={postData.Tags}
              />
              <MainImage
                thumbnail={postData.Thumbnail}
                title={postData.Title}
              />
            </div>
            <div className="border-b-2 border-b-(--color-github)">
              <Tags tags={postData.Tags} />
            </div>
            {/* 내용과 목차 */}
            <div className="flex h-full justify-center">
              {/* <div className="sm:w-[150px] h-full"></div> */}
              <div className="flex w-full flex-col gap-5">
                <div className="flex w-full">
                  {/* <PostContainer content={postData.Content} /> */}
                  <PostContainer>{postData.Content}</PostContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-20 hidden h-full pt-62.5 xl:flex">
          <Content content={postData.Content} title={postData.Title} />
        </div>
      </div>
    </>
  );
}
