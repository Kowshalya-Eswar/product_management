import { createSlice } from "@reduxjs/toolkit";

const initialState =[];
const cartSlice = createSlice({
 name:'cart',
 initialState,
 reducers:{
    add(state,action){
       const res = state.filter(item=>item.product.id === action.payload.product.id)
       if(res.length===0){
        state.push(action.payload)
       }
       
    },
    remove(state,action){
      console.log(action.payload);
      return state.filter(item=>item.product.id !== action.payload)
     
    }
}}
);

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;