export default function PinInput() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="rounded-[16px] w-[1000px] h-[500px] bg-[var(--color-primary)] flex justify-center items-center">
          <div className="rounded-[16px] w-[900px] h-[400px] bg-white flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col border-b-2 w-[500px] gap-[10px] pb-[10px]">
              <p className="font-semibold text-[32px]">Login</p>
              <p className="text-[20px]">핀코드를 입력해 주세요</p>
            </div>
            <input
              type="number"
              className="w-[400px] mt-[20px] h-[40px] utilities text-center outline-0 bg-[var(--color-primary)] rounded-[10px]"
              name="핀코드 입력칸"
              aria-label="핀코드 입력칸"
            />
          </div>
        </div>
      </div>
    </>
  );
}
