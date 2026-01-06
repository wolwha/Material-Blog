import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/proxy'

export async function proxy(request: NextRequest) {
  // 별도 파일로 분리한 세션 업데이트 로직 호출
  return await updateSession(request)
}

export const config = {
  matcher: [
    // 이미지, 정적 파일 등을 제외한 모든 경로에서 실행
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
