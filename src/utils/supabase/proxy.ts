import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          )
          
          // 응답 객체에도 쿠키를 업데이트해줘야 브라우저에 반영됨
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })

          cookiesToSet.forEach(({ name, value, options }) =>{
            const {maxAge, expires, ...sessionOptions} = options

            response.cookies.set(name, value, sessionOptions)
          }
          )
        },
      },
    }
  )

  // getUser를 호출하면 토큰 검증 및 갱신이 일어남
  await supabase.auth.getUser()

  return response
}
