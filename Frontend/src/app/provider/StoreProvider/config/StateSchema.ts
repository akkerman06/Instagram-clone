import { PostState } from "@/entities/PostCard";
import { ProfileState } from "@/entities/Profile";
import { UserState } from "@/entities/User";
import { AddPostModalState } from "@/features/AddPostModal";
import { AuthState } from "@/features/auth";
import { Axios, AxiosInstance } from "axios";

export interface StateSchema {
  auth: AuthState;
  user: UserState;
  profile: ProfileState;
  addPostModal: AddPostModalState;
  post: PostState;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
