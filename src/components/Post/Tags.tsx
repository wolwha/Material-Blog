interface Tag {
  tags: string[];
}

export default function Tags({ tags }: Tag) {
  return (
    <>
      <div className="mx-2 mb-5 flex flex-wrap gap-2 sm:mx-0">
        {tags.map((tag, idx) => (
          <span
            className="mr-1 items-center justify-center rounded-xl bg-(--color-tag-gray) px-2 py-1 text-center"
            key={idx}
          >
            {`#${tag}`}
          </span>
        ))}
      </div>
    </>
  );
}
