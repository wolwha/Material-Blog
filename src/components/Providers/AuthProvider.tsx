'use client'; // 👈 클라이언트 컴포넌트 필수!

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client'; // 클라이언트용 슈파베이스
import { useAuthStore } from '@/stores/userStore'; // 작성하신 주스탠드 스토어
import { User } from '@supabase/supabase-js';

export default function AuthProvider({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const setUser = useAuthStore((state) => state.setUser);

  // ✅ [1. 초기화] 서버에서 받아온 user 정보를 스토어에 즉시 주입
  // useState의 초기값 함수는 컴포넌트 마운트 시 딱 한 번만 실행됩니다.
  useState(() => {
    setUser(user);
  });

  // ✅ [2. 실시간 감지] 브라우저에서 로그인/로그아웃 발생 시 스토어 업데이트
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      // 세션이 있으면 유저 정보 저장, 없으면 null 저장
      setUser(session?.user ?? null);
    });

    // 컴포넌트가 사라질 때 구독 해제 (메모리 누수 방지)
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, setUser]);

  // ✅ [3. 렌더링] 자식 컴포넌트들을 그대로 보여줌 (데이터 공급만 담당)
  return <>{children}</>;
}
