"use client";
import { usePathname } from "next/navigation";
import CategoryGroup from "./CategoryGroup";
import CategoryDetail from "./CategoryDetail";

export default function CategoryPage() {
  const location = usePathname();
  return (
    <>
      <div className="flex flex-col pt-[25px] w-full">
        {location === "/category" ? <CategoryGroup /> : <CategoryDetail />}
      </div>
    </>
  );
}
