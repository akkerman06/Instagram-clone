import { ThunkConfig } from "@/app/provider";
import { userActions } from "@/entities/User";
import { User } from "@/entities/User/model/types/user";
import { ImageUpload, imageUploade } from "@/shared/lib/imageUpload";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileActions } from "../slice/profileSlice";

interface FollowParams {
  user: User;
  auth: User;
  id: string;
}

export const followUser = createAsyncThunk<
  any,
  FollowParams,
  ThunkConfig<string>
>("profile/follow", async (params, thunkApi) => {
  const { rejectWithValue, extra, dispatch } = thunkApi;
  const { user, auth, id } = params;
  try {
    const newUser = {
      ...user,
      followers: [...user.followers, auth],
    };
    dispatch(profileActions.setUpdateFollow(newUser));
    dispatch(
      userActions.setUpdateUser({
        ...auth,
        following: [...auth.following, newUser],
      })
    );
    await extra.api.patch(`/user/${user._id}/follow`);
  } catch (err: any) {
    return rejectWithValue(err.response.data.msg);
  }
});
