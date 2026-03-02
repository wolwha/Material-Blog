import Edit from '@/components/Post/Edit/Edit';
import { createClient } from '@/utils/supabase/server';

export default async function page({
  params,
}: {
  params: Promise<{ postid: string }>;
}) {
  const foundParams = await params;
  const supabase = await createClient();
  const { data } = await supabase
    .from('Posts')
    .select('*')
    .eq('id', foundParams.postid)
    .single();
  return (
    <>
      <Edit editData={data} isEdit={true} />
    </>
  );
}
