export const dynamic = 'force-dynamic';

import Container from '@/components/Main/Container';
import EditButton from '@/components/Main/EditButton';
import FloatingButton from '@/components/Mobile/Common/floatingButton';
import { createClient } from '@/utils/supabase/server';

export default async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const hasUser = !!user;
  // Posts의 데이터를 전부 받아오기
  const fetchResult = await supabase
    .from('Posts')
    .select('*')
    .order('created_at', { ascending: false });
  return (
    <>
      <div className="flex h-full items-start justify-center rounded-[20px] bg-(--color-custom-white)">
        <Container posts={fetchResult.data} />
        {hasUser ? <EditButton /> : null}
      </div>
      {/* 모바일 플로팅 메뉴 */}
      <div className="sticky bottom-6.25 z-20 flex w-full items-center justify-center sm:hidden">
        <FloatingButton />
      </div>
    </>
  );
}
