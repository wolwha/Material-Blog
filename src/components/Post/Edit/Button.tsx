export default function Button() {
  return (
    <>
      <div className="flex gap-[20px] mt-[10px]">
        <button
          className="w-[85px] h-[32px] rounded-[100px] bg-[var(--color-primary)] cursor-pointer"
          name="저장"
          aria-label="저장"
        >
          저장
        </button>
        <button
          className="w-[85px] h-[32px] rounded-[100px] border-1 border-[var(--color-primary)] cursor-pointer"
          name="취소"
          aria-label="취소"
        >
          취소
        </button>
      </div>
    </>
  );
}
