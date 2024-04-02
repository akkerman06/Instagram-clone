import { ThunkConfig } from "@/app/provider";
import { Post } from "@/entities/PostCard";
import { ImageUpload, imageUploade } from "@/shared/lib/imageUpload";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface GetFetchPosts {
  posts: Post[];
  msg: string;
  result: number;
}
export const getFetchPosts = createAsyncThunk<any, void, ThunkConfig<string>>(
  "post/getPosts",
  async (_, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;
    try {
      const { data } = await extra.api.get<GetFetchPosts>("/posts", {});
      return data;
    } catch (e) {
      return rejectWithValue(e.responce.data.msg);
    }
  }
);
