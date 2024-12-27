import { useEffect, useState } from 'react'
import { useLocalStore } from '../store'

export function useEffectProp(useStore: any, prop: string) {
  const [res, setRes] = useState()
  const { [prop]: realProp } = useStore()
  useEffect(() => {
    console.log('effect')
    setRes(realProp)
  }, [])
  return res
}
