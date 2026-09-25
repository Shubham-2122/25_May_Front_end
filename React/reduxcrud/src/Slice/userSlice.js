import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userRead = createAsyncThunk(
    'userRead', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/users")
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const userAdd = createAsyncThunk(
    'userAdd',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post("http://localhost:3000/users",data)
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleterUser = createAsyncThunk(
    'deleterUser',async(id,{rejectWithValue})=>{
        try {
            const res = await axios.delete(`http://localhost:3000/users/${id}`)
            const result = await res.data 
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const userSlice = createSlice({
    name: "userDetails",
    initialState: {
        loading: true,
        users: [],
        isreject: ""
    },
    reducers: {
        userPending: (state, action) => {
            state.loading = true
        },
        userFullfield: (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        },
        userRejected: (state, action) => {
            state.loading = false
            state.isreject = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        // get
        .addCase(userRead.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(userRead.fulfilled,(state,action)=>{
            state.loading = false 
            state.users =action.payload
        })
        .addCase(userRead.rejected,(state,action)=>{
            state.loading = false
            state.isreject = action.payload
        })

        // add
        .addCase(userAdd.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(userAdd.fulfilled,(state,action)=>{
            state.loading = false 
            state.users.push(action.payload)
        })
        .addCase(userAdd.rejected,(state,action)=>{
            state.loading = false
            state.isreject = action.payload
        })

        // delete data
        .addCase(deleterUser.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(deleterUser.fulfilled,(state,action)=>{
            state.loading = false 
            state.users = state.users.filter((data,index) => data.id != action.payload.id)
        })
        .addCase(deleterUser.rejected,(state,action)=>{
            state.loading = false
            state.isreject = action.payload
        })
    }
})

export const {userPending,userFullfield,userRejected} = userSlice.actions
export default userSlice.reducer