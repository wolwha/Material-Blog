import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    icon: "/Gemini_Generated_Image_ul6ukvul6ukvul6u.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex">
          {/* 사이드바 */}
          <SideBar />
          <div className="flex flex-col w-full">
            {/* 헤더 */}
            <Header />
            {/* 컨테이너 */}
            <div className="h-full bg-[#f4f4f4] flex">
              {/* 컨텐츠 */}
              <div className="w-full min-h-[calc(100vh-105px)] bg-[#E8DEF8] rounded-tl-[20px] px-[30px] pt-[40px] flex flex-col">
                <div className="h-full rounded-[20px] bg-white justify-center items-start flex">
                  {children}
                </div>
                {/* 푸터 */}
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
