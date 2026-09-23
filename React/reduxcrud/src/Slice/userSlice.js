import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"userDetails",
    initialState:{
        loading : true,
        users : [],
        error : ""
    },
    reducers:{

    }
})

export const {} = userSlice.actions
export default userSlice.reducer