
import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "../types/profile";
import { searchUsers } from "../service/searchUsers";
import { getUserProfile } from "../service/getUserProfile";

const initialState: ProfileState = {
    posts: [],
    users: [],
    user: null,
    loading: false,
    succes: '',
    error: '',
    searchUsers: [],
    searchLoading: false

}


const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileUser: (state,action) => {
            state.user = action.payload
        },
        setSearchUsers: (state) => {
            state.searchUsers = []
        },
    },
    extraReducers(builder) {
        builder
        .addCase(searchUsers.pending , (state) => {
            state.searchLoading = true
        })
        .addCase(searchUsers.fulfilled , (state , action) => {
            state.searchLoading = false,
            state.searchUsers = action.payload
        })
        .addCase(searchUsers.rejected , (state) => {
            state.searchLoading = false
        })

        .addCase(getUserProfile.pending, (state , action) => {
            state.loading = true
        })
        .addCase(getUserProfile.fulfilled, (state , action) => {
            state.loading = false
            state.users = [...state.users, action.payload.user]
        })
    },

   
})

export const profileActions = profileSlice.actions
export const profileReducer = profileSlice.reducer