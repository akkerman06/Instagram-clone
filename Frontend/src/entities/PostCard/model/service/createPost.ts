import { ThunkConfig } from "@/app/provider";
import { ImageUpload, imageUploade } from "@/shared/lib/imageUpload";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postActions } from "../slice/postSlcie";
import { Post } from "../types/post";

interface CreatePostParams {
  content: string;
  images: File[];
}
interface GetParamsCreatePost {
  newPost: Post;
}
export const createPost = createAsyncThunk<
  any,
  CreatePostParams,
  ThunkConfig<string>
>("post/create", async (params, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;
  const { images, content } = params;
  try {
    let newImages: ImageUpload[] = [];
    if (images.length > 0) newImages = await imageUploade(images);

    const { data } = await extra.api.post<GetParamsCreatePost>("/posts", {
      content,
      images: newImages,
    });

    dispatch(postActions.setCreatePost(data.newPost));
  } catch (e) {
    return rejectWithValue(e.responce.data.msg);
  }
});
