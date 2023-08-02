import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

interface State {
    status: string,
    isOwner:boolean
    data:User
}

interface User {
    id?:string,
    first_name?:string,
    last_name?:string,
    display_name?:string,
    nickname?:string,
    email?:string,
    role?:string,
    avatar_url?: string,
    status?:string,
    email_verified_at?:string,
    created_at?:string,
    updated_at?:string,
    delete_at?:string
    slug?:string
    profile?:Profile
    contacts?:Contact[],
    places?:Place[],
    works_educations?:WorkAndEducation[]
}

interface Profile{
    gender?:string,
    dob?:string,
    cover_image_url?:string,
    introduce?:string,
    friends_count?:number,
    followers_count?:number
}

interface Contact{
    content?:string,
    type?:string,
    status?:string
}

interface Place{
    name?:string,
    type?:string
    status?:string
}

interface WorkAndEducation{
    name?:string,
    type?:string,
    year_start?:string,
    year_end?:string
    status?:string
}

const initialState:State = {
    status: "idle",
    isOwner: false,
    data:{}
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setOwner: (state, actions: PayloadAction<boolean>) => {
            state.isOwner = actions.payload;
            return state;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProfile.pending, (state, actions) => {
                state.status = "loading";
            })
            .addCase(fetchProfile.fulfilled, (state, actions) => {
                state.status = "success";
                state.data = actions.payload;
            })
            .addCase(fetchProfile.rejected, (state, actions) => {
                state.status = "reject";
                state.data={}
            })
    },
});

export const fetchProfile = createAsyncThunk("profile/fetch", async (slug:string) => {
    try {
        const profile = new UserService()
        console.log("checking")
        let result = await profile.getProfile(slug);
        return result.data;
    } catch (error:any) {
        throw error.data.message
    }
});

export const { setOwner } = profileSlice.actions;
export default profileSlice;
