import { ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileActions } from "../slice/profileSlice";

export const getUserPosts = createAsyncThunk<
  any,
  { id: string },
  ThunkConfig<string>
>("profile/getUserPosts", async ({ id }, thunkApi) => {
  const { rejectWithValue, extra, dispatch } = thunkApi;

  try {
    const res = await extra.api.get(`/user_posts/${id}`);
    console.log(res);
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data.msg);
  }
});
