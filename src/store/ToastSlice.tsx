import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type toastData = {
    title:string
    icon : string
    id : number
    style : string
}

type toastStore = {
    toast : toastData[]
}

const initialState:toastStore = {
    toast: [],
}

export const ToastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        addToCartToast:(state,action:PayloadAction<{title:string ,id:number}>)=>{
            const template:toastData = {
                title: action.payload.title,
                icon : "addToCart",
                id : action.payload.id,
                style: "bg-[#6AAA7C]"
            }
            state.toast = [...state.toast,template]
        },
        favoriteToast:(state,action:PayloadAction<{title:string ,id:number}>)=>{
            const template:toastData = {
                title: action.payload.title,
                icon : "favorite",
                id : action.payload.id,
                style: "bg-red-400"
            }
            state.toast = [...state.toast,template]
        },
        removeCartToast:(state,action:PayloadAction<{title:string ,id:number}>)=>{
            const template:toastData = {
                title: action.payload.title,
                icon : "remove",
                id : action.payload.id,
                style: "bg-red-700"
            }
            state.toast = [...state.toast,template]
        },
        deleteToast:(state,action:PayloadAction<number>)=>{
            const deleteData = state.toast.filter((toast)=>toast.id !== action.payload)
            state.toast = deleteData
        }
    }
})

export const {addToCartToast,deleteToast,favoriteToast,removeCartToast} = ToastSlice.actions
export default ToastSlice.reducer