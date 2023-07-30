import { RootState } from "./store";

export const getTheme = (state:RootState) => state.theme
export const getChat = (state:RootState) => state.chat

export const getAuth = (state:RootState) =>state.auth