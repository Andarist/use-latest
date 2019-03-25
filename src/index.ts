import * as React from 'react'

const useLatest = <T>(value: T) => {
  const ref = React.useRef(value)

  React.useEffect(() => {
    ref.current = value
  })

  return ref
}

export default useLatest
