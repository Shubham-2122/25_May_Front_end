import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Slice/userSlice";
import  productSlice  from "../Slice/productSlice";

export default configureStore({
    reducer:{
        users : userSlice,
        product : productSlice
    }
})