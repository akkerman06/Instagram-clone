import { ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../types/post";
import { User } from "@/entities/User/model/types/user";
import { postActions } from "../slice/postSlcie";
import { profileActions } from "@/entities/Profile";

interface UnSavePostParams {
  post: Post;
  auth: User;
}

export const UnSavePost = createAsyncThunk<
  any,
  UnSavePostParams,
  ThunkConfig<string>
>("post/unSave", async (params, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;
  const { post, auth } = params;
  const newPost = {
    ...post,
    saves: post.saves.filter((item) => item._id !== auth._id),
  };

  dispatch(postActions.setUpdatePost(newPost));
  dispatch(profileActions.setUpdateProfilePost(newPost));

  try {
    await extra.api.patch(`/unSavePost/${post._id}`);
  } catch (e) {
    return rejectWithValue(e.responce.data.msg);
  }
});
