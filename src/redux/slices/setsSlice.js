import {api} from "../api/api";
import {createSlice} from "@reduxjs/toolkit";


const setsSlice = createSlice({
    name: "sets",
    initialState:[],

    extraReducers: (builder) => {

        builder.addMatcher(api.endpoints.getSets.matchFulfilled, (state, {payload}) => {
            return payload
        })
    }
})

export default setsSlice.reducer;