"use client"

import { usePinStore } from "@/stores/pinStore";

export default function PinInput() {
  const {pin, setPin, setPass} = usePinStore();
  const handlePin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.currentTarget.value)
  }
  const handleConfirm = () => {
    // env에서 클라이언트 사이드 코드가 값을 불러오려면 NEXT-PUBLIC으로 시작해야 함
    if(pin === process.env.NEXT_PUBLIC_PIN_CODE){
      setPass(true)
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="rounded-2xl w-225 h-auto bg-white flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col border-b-2 w-125 gap-2.5 pb-2.5">
            <p className="font-semibold text-[32px]">Login</p>
            <p className="text-[20px]">핀코드를 입력해 주세요</p>
          </div>
          <input
              type="password"
              className="w-100 mt-5 h-10 utilities text-center outline-0 border-b border-black"
              name="핀코드 입력칸"
              aria-label="핀코드 입력칸"
              onChange={handlePin}
            />
        </div>
        <button className="w-30 h-10 rounded-2xl bg-(--color-card) font-bold text-[16px] cursor-pointer hover:bg-(--color-primary) hover:text-white" onClick={handleConfirm}>
          확인
        </button>
      </div>
    </>
  );
}
