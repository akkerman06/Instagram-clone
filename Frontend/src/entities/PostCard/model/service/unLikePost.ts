import { ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../types/post";
import { User } from "@/entities/User/model/types/user";
import { postActions } from "../slice/postSlcie";

interface LikePostParams {
  post: Post;
  auth: User;
}
interface GetParamsCreatePost {
  newPost: Post;
}
export const unLikePost = createAsyncThunk<
  any,
  LikePostParams,
  ThunkConfig<string>
>("post/unlike", async (params, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;
  const { post, auth } = params;
  const newPost = {
    ...post,
    likes: post.likes.filter((item) => item._id !== auth._id),
  };
  dispatch(postActions.setUpdatePost(newPost));
  try {
    await extra.api.patch(`/post/${post._id}/unLike`);
  } catch (e) {
    return rejectWithValue(e.responce.data.msg);
  }
});
