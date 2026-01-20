export default function PostContainer({content}: {content: string}) {
  return (
    <>
      <div className="sm:w-auto">
        <p>{content}</p>
      </div>
    </>
  );
}
