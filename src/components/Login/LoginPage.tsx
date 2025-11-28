"use client";
import Login from "@/components/Login/Login";
import PinInput from "@/components/Login/PinInput";
import { useState } from "react";

export default function LoginPage() {
  const [auth, setAuth] = useState<boolean>(false);
  return <>{auth ? <Login /> : <PinInput />}</>;
}
