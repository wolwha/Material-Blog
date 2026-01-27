"use client"
import { createClient } from "@/utils/supabase/client";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const handleGoogleLogin = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
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
      <div className="flex justify-center items-center">
          <div className="rounded-2xl w-225 h-100 bg-white flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col border-b-2 w-125 gap-2.5 pb-2.5">
              <p className="font-semibold text-[32px]">Login</p>
              <p className="text-[20px]">돌아오신걸 환영합니다 설월화님!</p>
            </div>
            <button
              className="w-100 rounded-2xl border flex justify-center items-center mt-5 h-10"
              name="구글 로그인 버튼"
              aria-label="구글 로그인 버튼"
              onClick={handleGoogleLogin}
            >
              <div className="flex justify-center items-center">
                <FcGoogle size={20} />
                <p className="ml-2.5">Google 계정으로 로그인</p>
              </div>
            </button>
          </div>
        </div>
    </>
  );
}
