import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/proxy';

async function checkAuthenticated(request: NextRequest) {
  // 쿠키에서 sb-iziqhetiqqnkxiyymwsd-auth-token-code-verifier 토큰 가져오기
  const token = request.cookies.get(
    'sb-iziqhetiqqnkxiyymwsd-auth-token-code-verifier',
  );

  // 토큰이 없을 경우 인증되지 않음
  if (!token) return false;

  // 토큰이 있을 경우 인증됨
  return true;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protectedPage = pathname.startsWith('/post/edit');

  if (protectedPage) {
    // 인증 상태 확인
    const isAuthenticated = await checkAuthenticated(request);
    if (!isAuthenticated) {
      // 인증되지 않은 경우 홈으로 리다이렉트
      return NextResponse.redirect(new URL('/', request.url));
    }

    // 별도 파일로 분리한 세션 업데이트 로직 호출
    // 아래 코드가 NextResponse.next()의 역할도 같이 한다.
    return await updateSession(request);
  }

  if (pathname === '/logout') {
    const response = NextResponse.redirect(new URL('/', request.url));

    response.cookies.set('session', '', {
      path:'/'
    })
  }

  // 제한 대상이 아닌 페이지에 대해서는 통과
  return NextResponse.next();
}

export const config = {
  matcher: [
    // 이미지, 정적 파일 등을 제외한 모든 경로에서 실행
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
