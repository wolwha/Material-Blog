"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdCategory, MdHomeFilled } from "react-icons/md";

export default function FloatingButton () {
  const pathname = usePathname()
  // const path = useState<boolean>(true)
  return (
    <>
      <div className="flex gap-[8px] sticky bottom-0 bg-white px-[10px] py-[10px] rounded-[100px] shadow-xl">
        <Link href={"/"}>
          <button className="w-[120.5px] h-[56px] rounded-[100px] flex justify-center items-center hover:cursor-pointer active:bg-[var(--color-point)] hover:bg-[var(--color-point)] bg-[var(--color-point)] text-white">
            <MdHomeFilled />
            Home
          </button>
        </Link>
        <Link href={"/category"}>
          <button className="w-[120.5px] h-[56px] flex justify-center items-center bg-[var(--color-primary)] rounded-r-[100px] rounded-l-[30px] active:bg-[var(--color-point)] hover:bg-[var(--color-point)] transform hover:cursor-pointer">
            <MdCategory />
            Category
          </button>
        </Link>
      </div>
    </>
  );
}
