import Post from '@/components/Post/Post';
import { Posts } from '@/types/postType';
import { createClient } from '@/utils/supabase/server';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function page({
  params,
}: {
  params: Promise<{ postid: string }>;
}) {
  const { postid } = await params;
  const id = Number(postid);
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('Posts')
    .select('*')
    .eq('id', id)
    .single();
  const postData = data as Posts;
  if (error) {
    console.error(error);
  }
  return (
    <>
      <Post postData={postData}>
        {/* 마크다운 해독은 서버 컴포넌트에서 진행 후 하위 컴포넌트에 prop으로 넘겨줘야 함 */}
        <MDXRemote source={postData.Content} />
      </Post>
    </>
  );
}
