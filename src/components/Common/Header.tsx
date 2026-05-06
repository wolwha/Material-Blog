'use client';
import Image from 'next/image';
import Logo from '@/assets/Logo.webp';
import { MdPerson } from 'react-icons/md';
import Link from 'next/link';
import { useAuthStore } from '@/stores/userStore';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';

export default function Header() {
  const { user } = useAuthStore();
  return (
    <>
      <header className="relative hidden h-26.5 w-full items-center justify-start bg-(--color-light-point) select-none sm:flex">
        <Link href={'/'} aria-label="홈으로 이동">
          <div className="ml-3.25 flex h-14 cursor-pointer gap-2.5" id="Logo">
            <div className="size-14">
              <Image src={Logo} alt="Logo" width="56" height="56" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-[20px] font-semibold">CODE RUNNER</p>
              <p className="text-[10px] font-semibold">.BLOG</p>
            </div>
          </div>
        </Link>
        <div className="absolute top-5.75 right-7.5 flex h-10 items-center justify-center gap-5">
          <Link href={'/about'} aria-label="정보 페이지로 이동">
            <div
              className="cursor-pointer font-semibold hover:underline"
              id="ABOUT"
            >
              ABOUT
            </div>
          </Link>
          {user === null ? null : (
            <button
              className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-(--color-primary)"
              id="Profile"
              name="Profile"
              aria-label="Profile"
            >
              {user != null ? (
                <Image
                  src={user?.user_metadata.avatar_url}
                  alt="Profile"
                  width="40"
                  height="40"
                  className="rounded-full"
                />
              ) : (
                <MdPerson size={25} />
              )}
            </button>
          )}
        </div>
      </header>
    </>
  );
}
