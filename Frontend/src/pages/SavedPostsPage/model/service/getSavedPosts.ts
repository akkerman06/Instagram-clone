import { ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "@/entities/PostCard";

export interface GetSavedPosts {
  savedPosts: Post[];
}

export const getSavedPosts = createAsyncThunk<any, void, ThunkConfig<string>>(
  "savedPosts/getSavedPosts",
  async (_, thunkApi) => {
    const { rejectWithValue, extra, dispatch } = thunkApi;

    try {
      const res = await extra.api.get(`/getSavePosts`);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);
