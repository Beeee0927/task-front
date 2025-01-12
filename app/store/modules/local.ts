import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { getInitialState } from './tools'

interface LocalStore {
  userId: string
  username: string
  role: 'user' | 'admin'
  deptName: 'frontEnd' | 'backEnd'
  setData: (data: {
    userId: string
    username: string
    role: 'user' | 'admin'
    deptName: 'frontEnd' | 'backEnd'
  }) => void
}

export const useLocalStore = create<
  LocalStore,
  [['zustand/persist', LocalStore]]
>(
  persist(
    (set) => ({
      ...getInitialState('local', {
        userId: '',
        username: '',
        role: 'user',
        deptName: 'frontEnd'
      }),
      setData: (data: {
        userId: string
        username: string
        role: 'user' | 'admin'
        deptName: 'frontEnd' | 'backEnd'
      }) => set(data)
    }),
    {
      name: 'local',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
