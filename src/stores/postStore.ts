import { create } from 'zustand';

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

  pendingFiles: Map<string, File>;
  addPendingFile: (blobUrl: string, file: File) => void;
  clearPendingFiles: () => void;

  // 저장된 데이터를 전부 리셋
  reset: () => void;
  context: string | null;
  setContext: (context: string | null) => void;
  toastmessage: string;
  setToastMessage: (toastmessage: string) => void;
  toastPopup: boolean;
  setToastPopup: (toastPopup: boolean) => void;
}

export const usePostStore = create<PostStore>((set) => ({
  title: null,
  setTitle: (title) => set({ title }),
  category: null,
  setCategory: (category) => set({ category }),
  content: null,
  setContent: (content) => set({ content }),
  tag: null,
  setTag: (tag) => set({ tag }),
  pendingFiles: new Map(),
  addPendingFile: (blobUrl, file) =>
    set((state) => ({
      pendingFiles: new Map(state.pendingFiles).set(blobUrl, file),
    })),
  clearPendingFiles: () => set({ pendingFiles: new Map() }),
  reset: () =>
    set({
      title: null,
      category: null,
      content: null,
      tag: null,
      thumbnail: null,
      context: null,
      toastPopup: false,
    }),
  thumbnail: null,
  setThumbnail: (thumbnail) => set({ thumbnail }),
  context: null,
  setContext: (context) => set({ context }),
  toastmessage: '',
  setToastMessage: (toastmessage) => set({ toastmessage }),
  toastPopup: false,
  setToastPopup: (toastPopup) => set({ toastPopup }),
}));
