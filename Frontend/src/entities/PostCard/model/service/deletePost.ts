import { ThunkConfig } from "@/app/provider";
import { ImageUpload, imageUploade } from "@/shared/lib/imageUpload";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postActions } from "../slice/postSlcie";
import { Post } from "../types/post";

interface deletePostParams {
  post: any;
}

export const deletePost = createAsyncThunk<
  any,
  deletePostParams,
  ThunkConfig<string>
>("post/delete", async (params, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;
  const { post } = params;
  dispatch(postActions.setDeletePost(post._id));

  try {
    await extra.api.delete<deletePostParams>(`/post/${post._id}`);
  } catch (e) {
    return rejectWithValue(e.responce.data.msg);
  }
});
