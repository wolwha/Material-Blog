import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies(); // Next.js 15에서는 await 필요

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              const { maxAge, expires, ...sessionOptions } = options;
              cookieStore.set(name, value, sessionOptions);
            });
          } catch {
            // Server Component에서 쿠키를 쓰려고 할 때 발생하는 에러 무시
            // (Server Actions나 Middleware에서만 쓰기가 가능하기 때문)
          }
        },
      },
    },
  );
}
