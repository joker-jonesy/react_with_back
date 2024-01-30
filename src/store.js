import { configureStore } from "@reduxjs/toolkit";
import { api } from "./redux/api/api";
import setsReducer from './redux/slices/setsSlice'

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        sets:setsReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
