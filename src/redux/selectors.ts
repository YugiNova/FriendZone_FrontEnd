import { RootState } from "./store";

export const getTheme = (state:RootState) => state.theme
export const getChat = (state:RootState) => state.chat

export const getAuth = (state:RootState) =>state.auth
export const getCurrentUser = (state:RootState) =>state.auth.currentUser

export const getProfile = (state:RootState) =>state.profile