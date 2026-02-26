'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdCategory, MdHomeFilled } from 'react-icons/md';

export default function FloatingButton() {
  const pathname = usePathname();
  return (
    <>
      <div className="sticky bottom-0 flex gap-2 rounded-[100px] bg-(--color-floating) px-2.5 py-2.5 mb-4 shadow-xl">
        {/* 버튼 상황별 색상 재지정할 것 */}
        <Link href={'/'} aria-label="홈으로 이동">
          {pathname === '\/' ? (
            <div className="flex h-14 w-[120.5px] items-center justify-center rounded-[100px] bg-(--color-point) text-white hover:cursor-pointer hover:bg-(--color-point) active:bg-(--color-point)">
              <MdHomeFilled />
              Home
            </div>
          ) : (
            <div className="flex h-14 w-[120.5px] items-center justify-center rounded-[100px] bg-(--color-primary) text-black hover:cursor-pointer hover:bg-(--color-point) active:bg-(--color-point)">
              <MdHomeFilled />
              Home
            </div>
          )}
        </Link>
        <Link href={'/category'} aria-label="카테고리 페이지로 이동">
          {pathname === '\/category' ? (
            <div className="flex h-14 w-[120.5px] transform items-center justify-center rounded-[100px] bg-(--color-point) text-white hover:cursor-pointer hover:bg-(--color-point) active:bg-(--color-point)">
              <MdCategory />
              Category
            </div>
          ) : (
            <div className="flex h-14 w-[120.5px] transform items-center justify-center rounded-[100px] bg-(--color-primary) hover:cursor-pointer hover:bg-(--color-point) active:bg-(--color-point)">
              <MdCategory />
              Category
            </div>
          )}
        </Link>
      </div>
    </>
  );
}
