import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface DetailStore {
  userId: number
  username: string
  role: 'user' | 'admin'
  setData: (data: {
    userId: number
    username: string
    role: 'user' | 'admin'
  }) => void
}

function getInitialState(name: string, defaultValue: object) {
  try {
    return {
      ...defaultValue,
      ...JSON.parse(localStorage.getItem(name)!).state
    }
  } catch {
    return defaultValue
  }
}

export const useDetailStore = create<
  DetailStore,
  [['zustand/persist', unknown]]
>(
  persist(
    (set) => ({
      // ...getInitialState('detail', { userId: 0, username: '', role: 'user' }),
      ...{ userId: 0, username: '', role: 'user' },
      setData: (data: {
        userId: number
        username: string
        role: 'user' | 'admin'
      }) => set(data)
    }),
    {
      name: 'detail',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
