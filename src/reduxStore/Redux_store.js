import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./reducers/productReducer";

const store = configureStore({
    reducer:{
        products:productSlice
    }
})

export default store