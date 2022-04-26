import type { BaseProvider } from '@ethersproject/providers'
import { createContext, useContext, FC } from 'react'

type IWeb3ProviderContext = {
  provider: BaseProvider
  ipfsGateway?: string
}

const Web3ProviderContext = createContext<IWeb3ProviderContext | null>(null)

export const Web3ContextProvider: FC<IWeb3ProviderContext> = props => {
  const { children, ...restProps } = props

  return (
    <Web3ProviderContext.Provider value={restProps}>
      {children}
    </Web3ProviderContext.Provider>
  )
}

export const useWeb3Provider = () => {
  const context = useContext(Web3ProviderContext)
  if (!context) {
    throw new Error('Component should be wrapped with Web3ContextProvider')
  }
  return context
}
