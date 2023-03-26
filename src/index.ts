import { useRef } from 'react'
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect'

const useLatest = <T>(value: T) => {
  const ref = useRef(value)

  useIsomorphicLayoutEffect(() => {
    ref.current = value
  })

  return ref
}

export default useLatest
