import { create } from "zustand";

interface PostStore {
  title: string | null;
  setTitle: (title: string | null) => void;
}

export const usePostStore = create<PostStore>((set) => ({
  title: null,
  setTitle: (title) => set({title})
}))
