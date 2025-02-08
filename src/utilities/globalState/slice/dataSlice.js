import { createSlice } from "@reduxjs/toolkit";
import data from "../../../constants/data";

const initialState = data;

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        updateProfile: (state, action) => {
            return { ...state, ...action.payload };  // Merge changes
        }
    },
});


export const { updateProfile } = dataSlice.actions;
export default dataSlice.reducer;