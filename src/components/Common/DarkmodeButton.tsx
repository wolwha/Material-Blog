'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';

export default function DarkmodeButton() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);
  const currentTheme = loaded ? resolvedTheme : 'light';
  return (
    <>
      <button
        className="cursor-pointer"
        name="darkmode"
        id="darkmode"
        aria-label="darkmode toggle"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {/* 배경 */}
        <div className="flex h-8 w-15.5 items-center rounded-2xl border-2 border-(--color-outline) bg-(--color-card)">
          {/* 움직이는 버튼 */}
          <div
            className={`mx-0.5 flex size-6 items-center justify-center rounded-full bg-(--color-custom-white) transition-transform duration-500 ease-in-out ${currentTheme === 'light' ? 'translate-x-0' : 'translate-x-7.5'}`}
          >
            {currentTheme === 'light' ? (
              <MdOutlineWbSunny />
            ) : (
              <MdOutlineDarkMode />
            )}
          </div>
        </div>
      </button>
    </>
  );
}
