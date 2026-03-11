'use client';

import { usePinStore } from '@/stores/pinStore';

export default function PinInput() {
  const { pin, setPin, setPass } = usePinStore();
  const handlePin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.currentTarget.value);
  };
  const handleConfirm = () => {
    // env에서 클라이언트 사이드 코드가 값을 불러오려면 NEXT-PUBLIC으로 시작해야 함
    if (pin === process.env.NEXT_PUBLIC_PIN_CODE) {
      setPass(true);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (pin === process.env.NEXT_PUBLIC_PIN_CODE) {
        setPass(true);
      }
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex h-auto w-225 flex-col items-center justify-center rounded-2xl bg-white">
          <div className="flex w-125 flex-col items-center justify-center gap-2.5 border-b-2 pb-2.5">
            <p className="text-[32px] font-semibold">Login</p>
            <p className="text-[20px]">핀코드를 입력해 주세요</p>
          </div>
          <input
            type="password"
            className="utilities mt-5 h-10 w-100 border-b border-black text-center outline-0"
            name="핀코드 입력칸"
            aria-label="핀코드 입력칸"
            onChange={handlePin}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          className="h-10 w-30 cursor-pointer rounded-2xl bg-(--color-card) text-[16px] font-bold hover:bg-(--color-primary) hover:text-white"
          onClick={handleConfirm}
        >
          확인
        </button>
      </div>
    </>
  );
}
