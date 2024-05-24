import { Post } from "@/entities/PostCard";
import { User } from "@/entities/User/model/types/user";

export interface ProfileState {
  posts: Post[];
  users: User[];
  user: User;
  error: string;
  succes: string;
  loading: boolean;
  searchUsers: User[];
  suggestionsUsers: User[];
  searchLoading: boolean;
  inited: boolean;
  loadingPosts: boolean;
  lengthUserPosts: number;
}
export enum FollowEnum {
  FOLLOWERS = "followers",
  FOLLOWING = "following",
}
export interface FollowModalType {
  isOpen: boolean;
  view: FollowEnum;
}
