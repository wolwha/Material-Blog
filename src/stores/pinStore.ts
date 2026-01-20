import { create } from "zustand";

interface PinStore {
  pin: string | null;
  setPin: (pin: string | null) => void;
  pass: boolean
  setPass: (pass: boolean) => void;
}

export const usePinStore = create<PinStore>((set) => ({
  pin: null,
  setPin: (pin) => set({pin}),
  pass: false,
  setPass: (pass) => set({pass}),
}))
