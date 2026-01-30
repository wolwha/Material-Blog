import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/Common/SideBar";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import MobileHeader from "@/components/Mobile/Common/MobileHeader";
import AuthProvider from "@/components/Providers/AuthProvider";
import { createClient } from "@/utils/supabase/server";
import { ThemeProvider } from "next-themes";
import Toast from "@/components/Common/Toast";
import { usePostStore } from "@/stores/postStore";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CODERUNNER.BLOG",
  description: "CODERUNNER Blog",
  icons: {
    icon: "/favicon.webp",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 사전 DNS 조회 */}
        <link rel="dns-prefetch" href="https://iziqhetiqqnkxiyymwsd.supabase.co"/>
        {/* TCP연결과 TLS 핸드셰이크까지 사전 완료 */}
        <link rel="preconnect" href="https://iziqhetiqqnkxiyymwsd.supabase.co"
        // crossOrigin: 외부 스토리지에서 이미지를 가져올 때 필수로 설정
        crossOrigin="anonymous"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased sm:overflow-y-scroll sm:custom-scrollbar`}
        >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider user = {user}>
            <div className="min-h-screen flex relative select-none w-auto">
              <div className="sm:fixed sm:top-0 sm:left-0 hidden none sm:block">
                {/* 사이드바 */}
                <SideBar />
              </div>
              <div className="sm:flex sm:flex-col grow w-full sm:ml-22.5">
                {/* 헤더 */}
                <Header />
                <MobileHeader />
                {/* 컨테이너 */}
                <div className="sm:h-full sm:bg-(--color-gray) bg-(--color-custom-white) sm:flex">
                  {/* 컨텐츠 */}
                  <div className="w-full sm:min-h-[calc(100vh-105px)] sm:bg-(--color-card) sm:rounded-tl-[20px] sm:px-7.5 sm:pt-7.5 flex flex-col">
                    <div className="h-full rounded-[20px] bg-(--color-custom-white) justify-center items-start sm:flex">
                      {children}
                    </div>
                    {/* 푸터 */}
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body> 
    </html>
  );
}
