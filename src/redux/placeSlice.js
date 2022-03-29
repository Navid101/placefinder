import { createSlice } from "@reduxjs/toolkit";

export const placeSlice = createSlice({
    name:"place",
    initialState:{
        place: "", 
        value: ""
    },
    reducers:{
        update:(state,action)=>{
            state.place = action.payload
        },
    }
})

export const {update} = placeSlice.actions
export default placeSlice.reducer;