import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/ThemeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
    }
});

export default store;