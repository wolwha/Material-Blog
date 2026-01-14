'use client'
import { createClient } from "@/utils/supabase/client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function CategoryDetail() {
  const param = useParams();
  console.log(param)
  useEffect(() => {
    const fetchData = async() => {
      const supabase = createClient();
      const {data, error} = await supabase.from("Posts").select("*")
      console.log(data)
    }

    fetchData();
  }, [])
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex relative text-start mx-[25px] px-[20px] w-full">
          <div className="w-full border-b-1">
            <p className="text-[32px] font-semibold">카테고리1</p>
          </div>
        </div>
        <div className="sm:grid sm:gap-x-[15px] gap-y-[20px] sm:justify-center my-[30px] sm:h-auto 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 select-none w-full px-[16px] flex flex-col sm:w-auto">
          {/* <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard /> */}
        </div>
      </div>
    </>
  );
}
