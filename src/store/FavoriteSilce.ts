import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AllProductList } from '../interface/allProductServices'

export interface fetchProductState {
    favoriteProduct: AllProductList[]
}

const favoriteFromLocalStorage = JSON.parse(localStorage.getItem("favorite") || "[]")

const initialState: fetchProductState = {
    favoriteProduct: favoriteFromLocalStorage,
}

export const FavoriteSlice = createSlice({
    name: 'favoriteProduct',
    initialState,
    reducers: {
        setFavoriteToLocalStorage: (state,action: PayloadAction<AllProductList[]>) => {
            state.favoriteProduct = action.payload
            localStorage.setItem("favorite",JSON.stringify(action.payload))
        }
    },
})


export const { setFavoriteToLocalStorage } = FavoriteSlice.actions

export default FavoriteSlice.reducer