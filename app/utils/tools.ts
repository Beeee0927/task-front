import {
  DependencyList,
  EffectCallback,
  useEffect,
  useRef,
  useState
} from 'react'

export function useEffectProp(useStore: any, prop: string) {
  const [res, setRes] = useState()
  const { [prop]: realProp } = useStore()
  useEffect(() => {
    setRes(realProp)
  }, [])
  return res
}

export const useSkipFirstEffect = (
  effect: EffectCallback,
  deps?: DependencyList
) => {
  let lock = useRef(true)
  useEffect(() => {
    if (lock.current) {
      lock.current = false
      return
    }
    effect()
  }, deps)
}
