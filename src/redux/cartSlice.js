import { createSlice } from '@reduxjs/toolkit'
import fackData from "../fackData/productData"
const initialState = {
    items: [],
    totalProduct: fackData,
    total: 0,
    totalQuantity: 0,
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            let check = state.items.findIndex(product => product.id === action.payload.id)
            if(check !== -1){
                state.items[check].quantity += action.payload.quantity
            }else{
                state.items.push(action.payload)
            }
            state.total = state.items.reduce((sum, product)=> sum + +product.price * product.quantity, 0)
            state.totalQuantity = state.items.reduce((sum1, product1)=> sum1 + product1.quantity, 0)
        },
        updateQuantity(state, action){
            let check = state.items.findIndex(product => product.id === action.payload.id)
            if(check !== -1){
                state.items[check].quantity = action.payload.quantity
            }
            state.total = state.items.reduce((sum, product)=> sum + +product.price * product.quantity, 0)
            state.totalQuantity = state.items.reduce((sum1, product1)=> sum1 + product1.quantity, 0)

        },
        removeItem(state, action){
            state.items = state.items.filter(product => product.id !== action.payload.id)
            state.total = state.items.reduce((sum, product)=> sum + +product.price * product.quantity, 0)
            state.totalQuantity = state.items.reduce((sum1, product1)=> sum1 + product1.quantity, 0)
        },
        checkOut(state, action){
            state.items = state.items.filter(product => product === action.payload)
            state.totalQuantity = state.items.reduce((sum1, product1)=> sum1 + product1.quantity, 0)
        }
    }
})
export const { addToCart, updateQuantity, removeItem, checkOut } = cartSlice.actions
export default cartSlice.reducer
