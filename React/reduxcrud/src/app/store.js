import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Slice/userSlice";
import  productSlice  from "../Slice/productSlice";
import { productApi } from "../Slice/productApi";

export default configureStore({
    reducer:{
        users : userSlice,
        product : productSlice,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware)
})