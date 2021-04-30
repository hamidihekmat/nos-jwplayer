import create from 'zustand';

type State = {
  bears: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
};

export const useStore = create<State>((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  decrease: (by) => set((state) => ({ bears: state.bears - 1 })),
}));
