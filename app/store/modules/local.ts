import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface LocalStore {
  userId: number
  username: string
  role: 'user' | 'admin'
  deptName: 'frontEnd' | 'backEnd'
  setData: (data: {
    userId: number
    username: string
    role: 'user' | 'admin'
    deptName: 'frontEnd' | 'backEnd'
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

export const useLocalStore = create<
  LocalStore,
  [['zustand/persist', LocalStore]]
>(
  persist(
    (set) => ({
      ...getInitialState('local', {
        userId: 0,
        username: '',
        role: 'user',
        deptName: 'frontEnd'
      }),
      setData: (data: {
        userId: number
        username: string
        role: 'user' | 'admin'
        deptName: 'frontEnd' | 'backEnd'
      }) => set(data)
    }),
    {
      name: 'local',
      storage: createJSONStorage(() => localStorage)
      // skipHydration: true
    }
  )
)
