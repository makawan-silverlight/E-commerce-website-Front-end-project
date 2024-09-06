import { configureStore } from '@reduxjs/toolkit'
import FetchProductSlice from './FetchProductSlice'
import ProductAll from './ProductDataSlice'

export const store = configureStore({
  reducer: {
    fetchProductAll : FetchProductSlice,
    ProductAll : ProductAll
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch