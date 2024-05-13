import { ThunkConfig } from "@/app/provider";
import { Post, postActions } from "@/entities/PostCard";
import { PostComment } from "@/entities/PostCard/model/types/comment";
import { profileActions } from "@/entities/Profile";
import { User } from "@/entities/User/model/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface CreateCommentParams {
  content: string;
  postId: string;
  postUserId: string;
  likes: string[];
  tag: any;
  reply: any;
  post: Post;
  user: User;
}
interface GetParamsCreateComment {
  newComment: Partial<PostComment>;
}
export const createComment = createAsyncThunk<
  any,
  CreateCommentParams,
  ThunkConfig<string>
>("post/create", async (params, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;
  const { post, likes, content, reply, postId, postUserId, user } = params;
  const newComment = {
    content,
    reply,
    postId,
    postUserId,
    user,
    likes,
  };
  const newPost = { ...post, comments: [...post.comments, newComment] };

  // @ts-ignore
  dispatch(postActions.setUpdatePost(newPost));
  // @ts-ignore
  dispatch(profileActions.setUpdateProfilePost(newPost));

  try {
    await extra.api.post<GetParamsCreateComment>("/comment", {
      postId,
      content,
      user,
    });
  } catch (e) {
    return rejectWithValue(e.responce.data.msg);
  }
});
