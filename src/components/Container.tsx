import PostCard from "./PostCard";

export default function Container() {
  return (
    <>
      <div className="grid grid-cols-4 gap-x-[15px] gap-y-[20px] justify-center my-[30px] h-auto 2xl:grid-cols-4 xl:grid-cols-3">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}
