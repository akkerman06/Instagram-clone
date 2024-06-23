import { PostState } from "@/entities/PostCard";
import { ProfileState } from "@/entities/Profile";
import { UserState } from "@/entities/User";
import { AuthState } from "@/features/auth";
import { SavedPostsState } from "@/pages/SavedPostsPage/model/types/savedPosts";
import { AxiosInstance } from "axios";

export interface StateSchema {
  auth: AuthState;
  user: UserState;
  profile: ProfileState;
  post: PostState;
  savedPosts: SavedPostsState;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
