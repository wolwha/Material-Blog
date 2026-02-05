import { ReactNode } from 'react';

export default function PostContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="prose prose-lg prose-slate dark:prose-invert w-full max-w-202.5 sm:w-auto">
        {children}
      </div>
    </>
  );
}
