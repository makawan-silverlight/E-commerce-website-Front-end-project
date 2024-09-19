import { configureStore } from '@reduxjs/toolkit'
import FetchProductSlice from './FetchProductSlice'
import ProductAll from './ProductDataSlice'
import FavoriteSlice from './FavoriteSilce'
import CartProductSlice from './CartProductSlice'
import ToastSlice from './ToastSlice'

export const store = configureStore({
  reducer: {
    fetchProductAll : FetchProductSlice,
    ProductAll : ProductAll,
    favoriteProduct : FavoriteSlice,
    CartProduct : CartProductSlice,
    toast : ToastSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch