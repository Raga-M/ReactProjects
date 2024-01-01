import { createSlice } from "@reduxjs/toolkit";

const initialState={
count:0
}
const CounterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
    increase:(state)=>{state.count+=1},
    decrease:(state)=>{state.count-=1},
    addBy:(state,action)=>{state.count+=action.payload},
    reset:(state)=>{state.count=0}
    }
}
    )

export const {increase,decrease,addBy,reset}=CounterSlice.actions;
export default CounterSlice.reducer