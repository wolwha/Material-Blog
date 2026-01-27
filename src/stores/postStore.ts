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
  thumbnail: File | null;
  setThumbnail: (thumbnail: File | null) => void;
  // 저장된 데이터를 전부 리셋
  reset: () => void;
  context: string | null;
  setContext: (context: string | null) => void;
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
  reset: () => set({title: null, category: null, content: null, tag:null, thumbnail:null}),
  thumbnail: null,
  setThumbnail: (thumbnail) => set({thumbnail}),
  context: null,
  setContext: (context) => set({context})
}))
