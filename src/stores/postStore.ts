import { create } from "zustand";

interface PostStore {
  title: string | null;
  setTitle: (title: string | null) => void;
  category: string | null;
  setCategory: (category: string | null) => void;
  content: string | null;
  setContent: (content: string | null) => void;
  tag: string[] | null;
  setTag: (tag: string[] | null) => void;
  // 저장된 데이터를 전부 리셋
  reset: () => void;
}

export const usePostStore = create<PostStore>((set) => ({
  title: null,
  setTitle: (title) => set({title}),
  category: null,
  setCategory: (category) => set({category}),
  content: null,
  setContent: (content) => set({content}),
  tag: null,
  setTag: (tag) => set({tag}),
  reset: () => set({title: null, category: null, content: null, tag:null})
}))
