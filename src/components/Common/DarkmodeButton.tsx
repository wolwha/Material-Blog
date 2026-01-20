"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

export default function DarkmodeButton () {
  const [loaded, setLoaded] = useState<boolean>(false)
  const {resolvedTheme, setTheme} = useTheme();
  useEffect(() => {
    setLoaded(true)
  }, [setLoaded])
  const currentTheme = loaded ? resolvedTheme : "light";
  return (
    <>
      <button className="cursor-pointer" name="darkmode" id="darkmode" aria-label="darkmode toggle" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
        {/* 배경 */}
        <div className="w-[62px] h-[32px] rounded-[16px] bg-[var(--color-card)] flex items-center border-2 border-[var(--color-outline)]">
          {/* 움직이는 버튼 */}
          <div className={`size-[24px] bg-white rounded-full mx-[2px] flex justify-center items-center transition-transform duration-500 ease-in-out ${currentTheme === "light" ? "translate-x-0" : "translate-x-[30px]"}`}>
            {currentTheme === "light" ? <MdOutlineWbSunny /> : <MdOutlineDarkMode/>}
          </div>
        </div>
      </button>
    </>
  );
}
