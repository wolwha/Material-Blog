import { create } from 'zustand';
import { User } from '@supabase/supabase-js'; // 👈 공식 타입 import

interface AuthState {
  user: User | null; // 👈 공식 타입 사용
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  clearUser: () => set({ user: null, isAuthenticated: false }),
}));
