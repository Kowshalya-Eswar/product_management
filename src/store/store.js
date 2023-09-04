import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
        reducer:{
            cart: cartSlice,
            products:productSlice,
            productFilter:searchSlice
        }
    });
export default store;