import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import chatSlice from "./chatSlice";
import authSlice from "./authSlice";


export const store = configureStore({
    reducer:{
        theme: themeSlice.reducer,
        chat: chatSlice.reducer,
        auth: authSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch