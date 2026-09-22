import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/counter/counterSlice";
import  todoSlice  from "../features/counter/todoSlice";

export default configureStore({
    reducer : {
        count : counterSlice,
        todos : todoSlice
        
    }
})