import { configureStore } from "@reduxjs/toolkit";
import { api } from "./redux/api/api";
import setsReducer from './redux/slices/setsSlice'
import authReducer from "./redux/slices/authSlice.js";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        sets:setsReducer,
        auth:authReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
