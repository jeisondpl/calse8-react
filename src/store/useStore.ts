import { create } from 'zustand'



interface IState {
  page: number
  inc: () => void
}

const useStore = create<IState>((set) => ({
  page: 0,
  inc: () => set((state) => ({ page: state.page + 1 })),
}))


export default useStore