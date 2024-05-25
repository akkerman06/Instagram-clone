import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SavedPostsState } from "../types/savedPosts";
import { GetSavedPosts, getSavedPosts } from "../service/getSavedPosts";
import { Post } from "@/entities/PostCard";

const initialState: SavedPostsState = {
  posts: [],
  loading: false,
  inited: false,
};

const savedPostsSlice = createSlice({
  name: "savedPosts",
  initialState,
  reducers: {
    setUpdatePost: (state, action: PayloadAction<Post>) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getSavedPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getSavedPosts.fulfilled,
        (state, action: PayloadAction<GetSavedPosts>) => {
          state.loading = false;
          state.posts = action.payload.savedPosts;
          state.inited = true;
        }
      )
      .addCase(getSavedPosts.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const savedPostsActions = savedPostsSlice.actions;
export const savedPostsReducer = savedPostsSlice.reducer;
