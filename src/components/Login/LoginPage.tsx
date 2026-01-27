"use client";
import Login from "@/components/Login/Login";
import PinInput from "@/components/Login/PinInput";
import { usePinStore } from "@/stores/pinStore";

export default function LoginPage() {
  const {pass} = usePinStore();
  return <>{pass ? <Login /> : <PinInput />}</>;
}
