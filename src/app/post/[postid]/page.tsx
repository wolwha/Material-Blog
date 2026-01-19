import Post from "@/components/Post/Post";
import { Posts } from "@/types/postType";
import { createClient } from "@/utils/supabase/server";


export default async function page({params}: {params: Promise<{postid:string}>}) {
  const {postid} = await params
  const id = Number(postid)
  const supabase = await createClient()
  const {data} = await supabase.from("Posts").select("*").eq("id", id).single()
  const postData = data as Posts
  return (
    <>
      <Post postData={postData} />
    </>
  );
}
