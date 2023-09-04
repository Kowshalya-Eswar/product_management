import { createSlice } from "@reduxjs/toolkit";
const initialState ={
  search: ''
}
const searchSlice = createSlice({
  name:'search',
  initialState,
  reducers:{
     add(state,action){
        state.search = action.payload
     },
     show(state,action){
       return state.search
     }
 }}
 );
 
 export const {add,show} = searchSlice.actions;
export default searchSlice.reducer;