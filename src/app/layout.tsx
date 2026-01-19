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
              <div className="sm:flex sm:flex-col grow w-full sm:ml-[90px]">
                {/* 헤더 */}
                <Header />
                <MobileHeader />
                {/* 컨테이너 */}
                <div className="sm:h-full sm:bg-[var(--color-gray)] sm:flex">
                  {/* 컨텐츠 */}
                  <div className="w-full sm:min-h-[calc(100vh-105px)] sm:bg-[var(--color-card)] sm:rounded-tl-[20px] sm:px-[30px] sm:pt-[40px] flex flex-col">
                    <div className="h-full rounded-[20px] bg-white justify-center items-start sm:flex">
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
