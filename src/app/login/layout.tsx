export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex justify-center items-center h-full w-full">
        {children}
      </div>
    </>
  );
}
