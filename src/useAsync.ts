import { useState, useEffect } from 'react'

export const useAsync = <T>(asyncFn: () => Promise<T>, deps: any[] = []) => {
  const [state, setState] = useState<T | null>(null)

  useEffect(() => {
    asyncFn().then(setState)
  }, deps)

  return state
}
