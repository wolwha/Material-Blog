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
        <div className="w-15.5 h-8 rounded-2xl bg-(--color-card) flex items-center border-2 border-(--color-outline)">
          {/* 움직이는 버튼 */}
          <div className={`size-6 bg-(--color-custom-white) rounded-full mx-0.5 flex justify-center items-center transition-transform duration-500 ease-in-out ${currentTheme === "light" ? "translate-x-0" : "translate-x-7.5"}`}>
            {currentTheme === "light" ? <MdOutlineWbSunny /> : <MdOutlineDarkMode/>}
          </div>
        </div>
      </button>
    </>
  );
}
