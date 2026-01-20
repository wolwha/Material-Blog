export default function Button() {
  return (
    <>
      <div className="flex gap-5 mt-2.5">
        <button
          className="w-21.25 h-8 rounded-[100px] bg-(--color-primary) cursor-pointer"
          name="저장"
          aria-label="저장"
        >
          저장
        </button>
        <button
          className="w-21.25 h-8 rounded-[100px] border border-(--color-primary) cursor-pointer"
          name="취소"
          aria-label="취소"
        >
          취소
        </button>
      </div>
    </>
  );
}
