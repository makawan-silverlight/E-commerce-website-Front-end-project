import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AllProductList } from '../interface/allProductServices'

export interface ProductState {
    data: AllProductList[],
    loading: boolean,
    error: null | any
}


const initialState: {product:ProductState} = {
    product: {
        data: [],
        loading: false,
        error: null
    }
}

export const ProductAll = createSlice({
    name: 'ProductAll',
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<ProductState>) => {
            state.product = action.payload
        }
    },
})


export const { setProduct } = ProductAll.actions

export default ProductAll.reducer