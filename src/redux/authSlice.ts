import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

interface Auth {
    currentUser:any,
    resetEmail:string,
    verifyEmail:boolean
}

const initialState:Auth = {
    currentUser: "",
    resetEmail: "",
    verifyEmail: true
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setResetEmail: (state,actions: PayloadAction<string>) => {
            state.resetEmail = actions.payload
            return state
        },
        setVerifyEmail: (state,actions: PayloadAction<boolean>) => {
            state.verifyEmail = actions.payload
            return state
        },
    }
})

export const {setResetEmail,setVerifyEmail} = authSlice.actions 
export default authSlice