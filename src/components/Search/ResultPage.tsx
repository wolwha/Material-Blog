export default function ResultPage () {
  return (
    <>
      <div className="flex flex-col pt-6.25 px-2.5 w-full">
          <div className="flex flex-col w-full justify-center items-center">
                  <div className="flex relative text-start mx-6.25 border-b px-5 w-full">
                    <p className="text-[32px] font-semibold">카테고리1</p>
                    <button
                      className="absolute right-5 bottom-0 hover:underline cursor-pointer"
                      name="더보기 버튼"
                      aria-label="더보기 버튼"
                    >
                      더보기
                    </button>
                  </div>
                  <div className="grid mt-3 mx-6.25 grid-rows-2 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-3.75 gap-y-5 mb-6.25">
                    {/* 기능개발시 grid rows는 2줄까지 설정 */}
                    
                  </div>
                </div>
      </div>
    </>
  );
}
