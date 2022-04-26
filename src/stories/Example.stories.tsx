import React from 'react'
import { StaticJsonRpcProvider } from '@ethersproject/providers'
import { useWeb3Avatar, Web3ContextProvider } from '../index'

const Avatar = () => {
  const avatarUrl = useWeb3Avatar('0x8b41bb055955fe9C0E0860a3b23A841785C2638f')
  return (
    <img
      width={'120px'}
      height='120px'
      src={avatarUrl}
      style={{ overflow: 'hidden', borderRadius: '50%' }}
    />
  )
}

const provider = new StaticJsonRpcProvider({
  url: 'https://api.mycryptoapi.com/eth',
})

const Example = () => {
  return (
    <Web3ContextProvider provider={provider}>
      <Avatar />
    </Web3ContextProvider>
  )
}

export default {
  title: 'Example',
  component: Example,
}

export const MyExample = () => <Example />
