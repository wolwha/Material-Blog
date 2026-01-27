"use client"
import Image from "next/image";
import Logo from "@/assets/Logo.webp";
import { MdPerson } from "react-icons/md";
import Link from "next/link";
import { useAuthStore } from "@/stores/userStore";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export default function Header() {
  const {user} = useAuthStore()
  return (
    <>
      <div className="w-full h-26.5 bg-(--color-gray) sm:flex justify-start items-center relative select-none hidden">
        <Link href={"/"} aria-label="홈으로 이동">
          <div
            className="flex gap-2.5 ml-3.25 cursor-pointer h-14"
            id="Logo"
          >
            <div className="size-14">
              <Image src={Logo} alt="Logo" width="56" height="56" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-[20px] font-semibold">CODE RUNNER</p>
              <p className="text-[10px] font-semibold">.BLOG</p>
            </div>
          </div>
        </Link>
        <div className="absolute right-7.5 h-10 top-5.75 gap-5 flex justify-center items-center">
          <Link href={"/about"} aria-label="정보 페이지로 이동">
            <div
              className="cursor-pointer font-semibold hover:underline"
              id="ABOUT"
            >
              ABOUT
            </div>
          </Link>
          {user === null ? null : <button
            className="size-10 rounded-full bg-(--color-primary) flex justify-center items-center cursor-pointer"
            id="Profile"
            name="Profile"
            aria-label="Profile"
          >
            {user != null ? <Image src={user?.user_metadata.avatar_url} alt="Profile" width="40" height="40" className="rounded-full"/> :
            <MdPerson size={25} />}
          </button>}
        </div>
      </div>
    </>
  );
}
