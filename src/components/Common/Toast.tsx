export default function Toast (message: string) {
  return (
    <>
      <div className="w-100 rounded-sm bg-(--color-toast-bg) shadow-xl shadow-[#000000] h-12 flex justify-start text-center items-center pl-4">{message}</div>
    </>
  );
}
