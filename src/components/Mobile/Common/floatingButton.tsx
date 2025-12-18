import Link from "next/link";
import { MdCategory, MdHomeFilled } from "react-icons/md";

export default function FloatingButton (pathname:{pathname: string}) {
  // const path = useState<boolean>(true)
  console.log(pathname)
  return (
    <>
      <div className="flex gap-[8px] sticky bottom-0 bg-white px-[10px] py-[10px] rounded-[100px] shadow-xl">
        <Link href={"/"}>
          <button className="w-[120.5px] h-[56px] rounded-[100px] flex justify-center items-center hover:cursor-pointer bg-[var(--color-point)] text-white">
            <MdHomeFilled />
            Home
          </button>
        </Link>
        <Link href={"/category"}>
          <button className="w-[120.5px] h-[56px] active:rounded-[100px] flex justify-center items-center bg-[var(--color-primary)] rounded-r-[100px] rounded-l-[30px] active:bg-[var(--color-point)] transform">
            <MdCategory />
            Category
          </button>
        </Link>
      </div>
    </>
  );
}
