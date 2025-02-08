import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/ThemeSlice";
import dataReducer from "./slice/dataSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        data: dataReducer
    }
});

export default store;