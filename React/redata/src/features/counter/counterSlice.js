import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState : {
        count : 1
    },
    reducers:{
        increment : (state)=>{
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        },
        zero : (state)=>{
            state.count = 0
        }

    }
})

export const {increment,decrement,zero} = counterSlice.actions;
export default counterSlice.reducer;