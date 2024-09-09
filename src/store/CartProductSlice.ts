import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AllProductList } from '../interface/allProductServices'

export interface cartProductState {
    CartProduct: AllProductList[]
}

const CartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

const initialState: cartProductState = {
    CartProduct: CartFromLocalStorage,
}

export const CartProductSlice = createSlice({
    name: 'CartProduct',
    initialState,
    reducers: {
        setCartToLocalStorage: (state,action: PayloadAction<AllProductList[]>) => {
            state.CartProduct = action.payload
            localStorage.setItem("cart",JSON.stringify(action.payload))
        }
    },
})


export const { setCartToLocalStorage } = CartProductSlice.actions

export default CartProductSlice.reducer