import { createSlice } from "@reduxjs/toolkit";

const cart = [
    {
        id:"",
        productName: "",
        totalItems: 0,
        price: 0,
        actualPrice: 0,
        quantity: 0
    }
]
export const productSlice = createSlice({
    name: "cart",
    initialState: cart,
    reducers: {
        increment: (state, action) => {
            state.map((e, i) => {
                if (action.payload.id == i) {
                    e.totalItems++
                    let x = (e.price + e.actualPrice).toFixed(2)
                    console.log(e.actualPrice)
                    e.price = parseFloat(x)
                    return e
                } else {
                    return e
                }
            })
        },
        decrement: (state, action) => {
            state.map((e, i) => {
                if (action.payload.id == i) {
                    e.totalItems--
                    let x = e.price
                    e.price = parseFloat((x - e.actualPrice).toFixed(2))
                    return e
                } else {
                    return e
                }
            })

        },
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        removeProduct: (state, action) => {
         return   state.filter((e, i) =>  action.payload.id !== i)
            //   console.log()
        },
        cancelCart:(state, action) => {
           return state=cart
        },
    }
})


export const { increment, decrement, addProduct, removeProduct,cancelCart } = productSlice.actions

export default productSlice.reducer