// import { ThunkConfig } from "@/app/provider";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { Post } from "../types/post";
// import { User } from "@/entities/User/model/types/user";
// import { postActions } from "../slice/postSlcie";
// import { profileActions } from "@/entities/Profile";
// import { ImageUpload, imageUploade } from "@/shared/lib/imageUpload";

// interface updatePostParams {
//   post?: Post;
//   images?: File[];
//   content: string;
//   auth?: User;
// }

// export const updatePost = createAsyncThunk<
//   any,
//   updatePostParams,
//   ThunkConfig<string>
// >("post/update", async (params, thunkApi) => {
//   const { extra, rejectWithValue, dispatch } = thunkApi;
//   const { content, post, images } = params;
//   const newPost = {
//     ...post,
//     content: content,
//     images: [...post.images, images],
//   };

//   try {
//     let newImages: ImageUpload[] = [];
//     if (images.length > 0) newImages = await imageUploade(images);
//     await extra.api.patch(`/post/${post._id}`, { content, images });
//     //@ts-ignore
//     dispatch(postActions.setUpdatePost(newPost));
//     //@ts-ignore

//     dispatch(profileActions.setUpdateProfilePost(newPost));
//   } catch (e) {
//     return rejectWithValue(e.responce.data.msg);
//   }
// });
