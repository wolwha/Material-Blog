import Tag from "../Tag";

export default function TagEdit() {
  return (
    <>
      <div className="flex gap-2.5 w-full">
        <input type="text" className="w-full border rounded-[5px]" />
        <button className="w-21.25 rounded-[10px] bg-(--color-primary)" aria-label="태그 추가 버튼">
          추가
        </button>
      </div>
      <div className="flex gap-2.5 w-full">
        <p>태그: </p>
        <Tag />
      </div>
    </>
  );
}
