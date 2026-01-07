export default function TitleEdit() {
  return (
    <>
      <div className="min-w-[500px] h-[220px] bg-[var(--color-primary)] flex justify-start items-center rounded-[20px] px-[50px] relative">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[16px]">날짜</p>
          <input
            type="text"
            className="text-[36px] font-semibold bg-white rounded-[10px] outline-0 px-[10px] max-w-[450px]"
            placeholder="제목을 입력하세요"
            aria-label="제목 입력 상자"
          />
          {/* 드롭다운 메뉴로 추후 변경 */}
          <p className="text-[16px]">카테고리</p>
        </div>
      </div>
    </>
  );
}
