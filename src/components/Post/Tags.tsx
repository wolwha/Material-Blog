interface Tag {
  tags: string[];
}

export default function Tags({ tags }: Tag) {
  return (
    <>
      <div className="my-5 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            className="mr-1 items-center justify-center rounded-[5px] bg-(--color-tag-gray) px-1.25 text-center"
            key={idx}
          >
            {`#${tag}`}
          </span>
        ))}
      </div>
    </>
  );
}
