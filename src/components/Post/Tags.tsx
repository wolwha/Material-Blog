interface Tag {
  tags: string[];
}

export default function Tags({ tags }: Tag) {
  return (
    <>
      <div className="mb-5 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            className="mr-1 items-center justify-center rounded-xl bg-(--color-tag-gray) px-2 text-center py-1"
            key={idx}
          >
            {`#${tag}`}
          </span>
        ))}
      </div>
    </>
  );
}
