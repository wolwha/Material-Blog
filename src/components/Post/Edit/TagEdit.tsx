import Tag from "../Tag";

export default function TagEdit() {
  return (
    <>
      <div className="flex gap-[10px] w-full">
        <input type="text" className="w-full border-1 rounded-[5px]" />
        <button className="w-[85px] rounded-[10px] bg-[var(--color-primary)]">
          추가
        </button>
      </div>
      <div className="flex gap-[10px] w-full">
        <p>태그: </p>
        <Tag />
      </div>
    </>
  );
}
