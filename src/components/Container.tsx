import PostCard from "./PostCard";

export default function Container() {
  return (
    <>
      <div className="grid gap-x-[15px] gap-y-[20px] justify-center my-[30px] h-auto 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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
