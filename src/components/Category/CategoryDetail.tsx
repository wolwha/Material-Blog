'use client'
import { Posts } from "@/types/postType";
import { createClient } from "@/utils/supabase/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PostCard from "../Main/PostCard";

export default function CategoryDetail() {
  const param = useParams<{categoryid: string}>();
  const [PostData, setPostData] = useState<Posts[] | null>(null)
  useEffect(() => {
    const fetchData = async() => {
      const supabase = createClient();
      const {data, error} = await supabase.from("Posts").select("*").eq("Category", decodeURIComponent(param.categoryid)).order("created_at", {ascending: false})
      if(error){
        console.error(error)
      }else{
        setPostData(data)
      }
    }

    fetchData();
  }, [param.categoryid])
  return (
    <>
      <div className="flex flex-col w-full justify-start items-center">
        <div className="flex relative text-start mx-6.25 px-5 w-full">
          <div className="w-full border-b">
            <p className="text-[32px] font-semibold">{decodeURIComponent(param.categoryid)}</p>
          </div>
        </div>
        <div className="sm:grid sm:gap-x-3.75 gap-y-5 sm:justify-center my-7.5 sm:h-auto 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 select-none w-full px-4 flex flex-col">
          {PostData?.map((post) => (<PostCard Title={post.Title} created_at={post.created_at} Content={post.Content} Thumbnail={post.Thumbnail} id={post.id} Category={post.Category} Tags={post.Tags} Context={post.Context} key={post.id}/>))}
        </div>
      </div>
    </>
  );
}
