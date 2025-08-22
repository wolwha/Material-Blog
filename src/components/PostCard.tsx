export default function PostCard() {
  return (
    <>
      <div className="w-[400px] h-[360px] rounded-[20px] bg-[#E8DEF8] flex justify-center cursor-pointer hover:scale-103 hover:shadow-2xs transform transition-transform">
        <div className="mt-[40px]">
          <div className="w-[350px] h-[200px] rounded-[20px] bg-[#d9d9d9]"></div>
          <div className="gap-[10px] mt-[20px]">
            <p className="text-[26px] font-bold">제목</p>
            <p className="text-[16px]">내용</p>
          </div>
        </div>
      </div>
    </>
  );
}
