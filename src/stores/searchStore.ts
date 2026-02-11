import { create } from 'zustand';

interface SearchStore {
  param: string;
  setParam: (param: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  param: '',
  setParam: (param) => set({ param }),
}));
