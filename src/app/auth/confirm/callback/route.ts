import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  
  // 1. OAuth 로그인 시 들어오는 'code' 확인
  const code = searchParams.get('code')
  
  // 2. 이메일 인증 시 들어오는 'token_hash'와 'type' 확인
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  
  // 로그인 후 이동할 주소 (기본값은 루트 '/')
  const next = searchParams.get('next') ?? '/'

  // [CASE A] OAuth 로그인 처리 (code가 있는 경우)
  if (code) {
    const supabase = await createClient()
    
    // 코드를 세션으로 교환합니다.
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // 성공 시 원래 가려던 페이지나 루트로 이동
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // [CASE B] 이메일 OTP 링크 처리 (token_hash가 있는 경우)
  if (token_hash && type) {
    const supabase = await createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      // 성공 시 원래 가려던 페이지나 루트로 이동
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // [실패] 모든 인증에 실패하면 에러 페이지로 이동
  // (참고: '/error' 페이지가 실제로 존재해야 404가 안 뜹니다)
  return NextResponse.redirect(`${origin}/error`)
}
