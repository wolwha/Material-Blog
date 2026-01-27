import CategoryPage from "@/components/Category/CategoryPage";
import FloatingButton from "@/components/Mobile/Common/floatingButton";
import { GroupedPosts, Posts } from "@/types/postType";
import { createClient } from "@/utils/supabase/server";


export default async function Page() {
    const supabase = await createClient()
    const {data} = await supabase.from("Posts").select("*").order('Category',{ascending: true})

    // 받아온 데이터를 카테고리 기준으로 묶어 해시 배열화
    const groupedData = ((data || []) as Posts[]).reduce<GroupedPosts>((acc, currentPost) => {
      const category = currentPost.Category;

      if(!acc[category]){
        acc[category] = [];
      }

      acc[category].push(currentPost);

      return acc
    }, {})
  return (
    <>
      <CategoryPage postData={groupedData} />
      {/* 모바일 플로팅 메뉴 */}
      <div className="sm:hidden sticky bottom-6.25 justify-center flex items-center w-full">
        <FloatingButton />
      </div>
    </>
  );
}
