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
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex relative text-start mx-[25px] px-[20px] w-full">
          <div className="w-full border-b-1">
            <p className="text-[32px] font-semibold">{decodeURIComponent(param.categoryid)}</p>
          </div>
        </div>
        <div className="sm:grid sm:gap-x-[15px] gap-y-[20px] sm:justify-center my-[30px] sm:h-auto 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 select-none w-full px-[16px] flex flex-col sm:w-auto">
          {PostData?.map((_, idx) => (<PostCard Title={PostData[idx].Title} created_at={PostData[idx].created_at} Content={PostData[idx].Content} Thumbnail={PostData[idx].Thumbnail} id={PostData[idx].id} Category={PostData[idx].Category} Tags={PostData[idx].Tags} key={idx}/>))}
        </div>
      </div>
    </>
  );
}
