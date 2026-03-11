'use client';
import Login from '@/components/Login/Login';
import PinInput from '@/components/Login/PinInput';
import { usePinStore } from '@/stores/pinStore';

export default function LoginPage() {
  const { pass } = usePinStore();
  return (
    <>
      <div className="sm:hidden">
        <p className="h-screen">PC환경에서 접속해주세요</p>
      </div>
      <div className="hidden sm:flex">{pass ? <Login /> : <PinInput />}</div>
    </>
  );
}
