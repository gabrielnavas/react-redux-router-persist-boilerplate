import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { RootState, StoreDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useStoreDispatch: () => StoreDispatch = useDispatch
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector