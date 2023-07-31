import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

interface Auth {
    currentUser: any;
    resetEmail: string;
    verifyEmail: boolean;
}

const initialState = {
    status: "idle",
    error: "",
    resetEmail: "",
    currentUser:{}
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setResetEmail: (state, actions: PayloadAction<string>) => {
            state.resetEmail = actions.payload;
            return state;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(checkLogin.pending, (state, actions) => {
                console.log(actions)
                state.status = "loading";
            })
            .addCase(checkLogin.fulfilled, (state, actions) => {
                state.status = "success";
                state.currentUser = actions.payload;
            })
            .addCase(checkLogin.rejected, (state, actions) => {
                state.status = "reject";
                switch (actions.error.message) {
                    case "Account is not verified":
                        state.error = "not_verified"
                        break;
                    default:
                        state.error = "not_logged_in";
                        break;
                }
            })
            .addCase(forgetLogin.fulfilled, (state, actions) => {
                state.error = "not_logged_in";
            })
    },
});

export const checkLogin = createAsyncThunk("auth/checkLogin", async () => {
    try {
        const auth = new AuthService();
        let result = await auth.checkLogin();
        return result;
    } catch (error:any) {
        throw error.data.message
    }
});

export const forgetLogin = createAsyncThunk("auth/forgetLogin", async () => {
    const auth = new AuthService();
    let result = await auth.removeCookie();
});

export const { setResetEmail } = authSlice.actions;
export default authSlice;
