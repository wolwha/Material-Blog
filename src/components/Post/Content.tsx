'use client';
interface ToC {
  id: string;
  text: string;
  level: number;
}
export default function Content() {
  return (
    <>
      <div className="sticky top-50 hidden h-full min-h-25 flex-col justify-center gap-2.5 sm:flex sm:w-37.5 sm:pr-6.25 sm:pl-6.25">
        <p>On this page</p>
        <h1 className="text-[20px] font-bold">제목</h1>
        <p>title</p>
        <p>list of content</p>
      </div>
    </>
  );
}
