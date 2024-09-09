import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AllProductList } from '../interface/allProductServices'

export interface fetchProductState {
    fetchProductAll: AllProductList[]
}


const initialState: fetchProductState = {
    fetchProductAll: [],
}

export const FetchProductSlice = createSlice({
    name: 'fetchProductAll',
    initialState,
    reducers: {
        setFetchProductAll: (state, action: PayloadAction<AllProductList[]>) => {
            state.fetchProductAll = action.payload
        }
    },
})


export const { setFetchProductAll } = FetchProductSlice.actions

export default FetchProductSlice.reducer