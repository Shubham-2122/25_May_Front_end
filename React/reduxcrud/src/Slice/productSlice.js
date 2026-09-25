import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ProductShow = createAsyncThunk(
    'ProductShow',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/products")
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const productSlice = createSlice({
    name:"productDetails",
    initialState:{
        isloading : true,
        products : [],
        isrejected : ""
    },
    reducers:{
        productPending:(state,action)=>{
            state.isloading = true
        },
        productFullfield:(state,action)=>{
            state.isloading = false
            state.products.push(action.payload)
        },
        productRejected:(state,action)=>{
            state.isloading = false
            state.isrejected = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(ProductShow.pending,(state,action)=>{
            state.isloading = true
        })
        .addCase(ProductShow.fulfilled,(state,action)=>{
            state.isloading = false
            state.products = action.payload
        })
        .addCase(ProductShow.rejected,(state,action)=>{
            state.isloading = false
            state.isrejected = action.payload
        })

    }
})

export const {productPending,productFullfield,productRejected} = productSlice.actions
export default productSlice.reducer