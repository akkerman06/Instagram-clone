import { Post } from "@/entities/PostCard";

export interface SavedPostsState {
  posts: Post[];
  loading: boolean;
  inited: boolean;
}
