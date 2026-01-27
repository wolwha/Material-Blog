import { ReactNode } from "react";

export default function PostContainer({children}: {children: ReactNode}) {
  return (
    <>
      <div className="sm:w-auto w-full prose prose-lg prose-slate dark:prose-invert max-w-202.5">
        {children}
      </div>
    </>
  );
}
