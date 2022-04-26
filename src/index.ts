import { useMemo } from 'react'
import { useAsync } from './useAsync'
import { Web3ContextProvider, useWeb3Provider } from './context'
import { createJazzIconAvatar } from './utils'

export { Web3ContextProvider }

export const useWeb3Avatar = (address: string) => {
  const { provider } = useWeb3Provider()

  const fallbackAvatar = useMemo(() => createJazzIconAvatar(address), [])
  const ensAvatar = useAsync(() => provider.getAvatar(address), [address])

  return ensAvatar || fallbackAvatar
}
