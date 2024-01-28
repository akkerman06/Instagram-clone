import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types/user";
import { getFetchAuthUser } from "../service/getFetchAuthUser";

const initialState: UserState = {
    user: null,
    token: '',
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state , action) => {
            state.user = action.payload
            state.token = action.payload.token
        }
    },

    extraReducers(builder) {
        builder.
        addCase(getFetchAuthUser.pending , (state) => {
            state.loading = true
        })
        .addCase(getFetchAuthUser.fulfilled , (state) => {
            state.loading = false
        })
        .addCase(getFetchAuthUser.rejected , (state) => {
            state.loading = false
        })
    }
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer