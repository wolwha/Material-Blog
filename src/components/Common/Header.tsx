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
      <div className="w-full h-[105px] bg-[var(--bg-gray)] sm:flex justify-start items-center relative select-none hidden">
        <Link href={"/"}>
          <button
            className="flex gap-[10px] ml-[13px] cursor-pointer"
            id="Logo"
            aria-label="Logo"
          >
            <div className="size-[56px]">
              <Image src={Logo} alt="Logo" width={56} height={56} />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-[20px] font-semibold">CODE RUNNER</p>
              <p className="text-[10px] font-semibold">.BLOG</p>
            </div>
          </button>
        </Link>
        <div className="absolute right-[30px] h-[40px] top-[23px] gap-[20px] flex justify-center items-center">
          <Link href={"/about"}>
            <button
              className="cursor-pointer font-semibold hover:underline"
              id="ABOUT"
              aria-label="ABOUT"
            >
              ABOUT
            </button>
          </Link>
          {user === null ? null : <button
            className="size-[40px] rounded-full bg-[var(--color-primary)] flex justify-center items-center cursor-pointer"
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
