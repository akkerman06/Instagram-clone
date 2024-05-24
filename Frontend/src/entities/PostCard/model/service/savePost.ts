import { ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../types/post";
import { User } from "@/entities/User/model/types/user";
import { postActions } from "../slice/postSlcie";
import { profileActions } from "@/entities/Profile";

interface SavePostParams {
  post: Post;
  auth: User;
}

export const savePost = createAsyncThunk<
  any,
  SavePostParams,
  ThunkConfig<string>
>("post/save", async (params, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;
  const { post, auth } = params;
  const newPost = { ...post, saves: [...post.saves, auth] };
  dispatch(postActions.setUpdatePost(newPost));
  dispatch(profileActions.setUpdateProfilePost(newPost));

  try {
    await extra.api.patch(`/savePost/${post._id}`);
  } catch (e) {
    return rejectWithValue(e.responce.data.msg);
  }
});
