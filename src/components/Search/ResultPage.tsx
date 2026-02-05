export default function ResultPage() {
  return (
    <>
      <div className="flex w-full flex-col px-2.5 pt-6.25">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative mx-6.25 flex w-full border-b px-5 text-start">
            <p className="text-[32px] font-semibold">카테고리1</p>
            <button
              className="absolute right-5 bottom-0 cursor-pointer hover:underline"
              name="더보기 버튼"
              aria-label="더보기 버튼"
            >
              더보기
            </button>
          </div>
          <div className="mx-6.25 mt-3 mb-6.25 grid grid-rows-2 gap-x-3.75 gap-y-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {/* 기능개발시 grid rows는 2줄까지 설정 */}
          </div>
        </div>
      </div>
    </>
  );
}
