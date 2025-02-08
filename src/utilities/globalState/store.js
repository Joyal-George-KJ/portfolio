import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import dataReducer from "./slice/dataSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        data: dataReducer
    }
});

export default store;