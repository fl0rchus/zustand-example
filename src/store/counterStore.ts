import { create } from "zustand";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  title: string;
  increment: (value: number) => void;
  posts: Post[];
  getPosts: () => Promise<void>;
  clearStore: () => void;
  multiply: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 10,
  title: "Counter",
  increment: (value: number) =>
    set((state) => ({
      count: state.count + value,
    })),
  posts: [],
  getPosts: async () => {
    const posts = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    set((state) => ({
      ...state,
      posts,
    }));
  },
  clearStore: () => {
    set({}, true);
  },
  multiply: (value: number) => {
    const { count } = get();
    set({ count: count * value });
  },
}));
