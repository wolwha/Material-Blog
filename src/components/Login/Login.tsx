'use client';
import { createClient } from '@/utils/supabase/client';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  const handleGoogleLogin = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/confirm/callback`,
        queryParams: {
          access_type: 'offline', // Refresh Token을 확실하게 받기 위해 권장
          prompt: 'consent', // 매번 구글 계정 선택창을 띄우고 싶다면 추가
        },
      },
    });
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex h-100 w-225 flex-col items-center justify-center rounded-2xl bg-white">
          <div className="flex w-125 flex-col items-center justify-center gap-2.5 border-b-2 pb-2.5">
            <p className="text-[32px] font-semibold">Login</p>
            <p className="text-[20px]">돌아오신걸 환영합니다 설월화님!</p>
          </div>
          <button
            className="mt-5 flex h-10 w-100 items-center justify-center rounded-2xl border"
            name="구글 로그인 버튼"
            aria-label="구글 로그인 버튼"
            onClick={handleGoogleLogin}
          >
            <div className="flex items-center justify-center">
              <FcGoogle size={20} />
              <p className="ml-2.5">Google 계정으로 로그인</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
