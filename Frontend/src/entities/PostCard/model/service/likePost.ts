import { ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../types/post";
import { User } from "@/entities/User/model/types/user";
import { postActions } from "../slice/postSlcie";
import { profileActions } from "@/entities/Profile";

interface LikePostParams {
  post: Post;
  auth: User;
}

export const likePost = createAsyncThunk<
  any,
  LikePostParams,
  ThunkConfig<string>
>("post/like", async (params, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;
  const { post, auth } = params;
  const newPost = { ...post, likes: [...post.likes, auth] };
  dispatch(postActions.setUpdatePost(newPost));
  dispatch(profileActions.setUpdateProfilePost(newPost));

  try {
    await extra.api.patch(`/post/${post._id}/like`);
  } catch (e) {
    return rejectWithValue(e.responce.data.msg);
  }
});
