'use client';

import { usePostStore } from '@/stores/postStore';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function ToastHandler() {
  const searchParams = useSearchParams();
  const { setToastPopup, setToastMessage, toastPopup } = usePostStore();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 파라미터의 message 수신
    const msgType = searchParams.get('message');

    // message 파라미터의 값이 upload_success일 시 실행
    if (msgType === 'upload_success') {
      setToastMessage('업로드 완료!');
      setToastPopup(true);

      // URL 파라미터 즉시 제거
      const newPath = window.location.pathname;
      // 현재 방문해 있는 주소를 이전 주소에서 대체 => 뒤로가기를 해도 파라미터가 있는 값으로 뒤로가기 되는것이 아님
      window.history.replaceState(null, '', newPath);
    } else if (msgType === 'delete_success') {
      setToastMessage('삭제 완료!');
      setToastPopup(true);

      const newPath = window.location.pathname;
      window.history.replaceState(null, '', newPath);
    }
  }, [searchParams]);

  // 토스트 끄기 로직이 작동하기 전 clearTimeout이 로직을 정리하지 못하도록 로직 분리 작성
  useEffect(() => {
    // 이전 타이머 존재 시 제거
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // 새로운 타이머
    timerRef.current = setTimeout(() => {
      setToastPopup(false);
      timerRef.current = null;
    }, 2000);

    // 컴포넌트가 언마운트될 때만 정리
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [toastPopup]);
  return null;
}
