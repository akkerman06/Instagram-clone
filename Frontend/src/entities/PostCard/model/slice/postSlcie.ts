import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post, PostState } from "../types/post";
import { createPost } from "../service/createPost";

export const initialState: PostState = {
  loading: false,
  posts: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setCreatePost: (state, action: PayloadAction<Post>) => {
      state.posts = [action.payload, ...state.posts];
    },
  },

  extraReducers(builder) {},
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
