import React from 'react'
import { StoresContext } from '@/stores'


/* 
 * Stores hook
 */


export const useStores = () => {
  const stores = React.useContext(StoresContext)
  
  if (!stores)
    throw new Error('useStores must be used within a StoreProvider')

  return stores
}