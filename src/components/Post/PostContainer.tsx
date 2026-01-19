export default function PostContainer({content}: {content: string}) {
  return (
    <>
      <div className="sm:w-[800px]">
        <p>{content}</p>
      </div>
    </>
  );
}
