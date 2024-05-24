import { User } from "@/entities/User/model/types/user";
import { ImageUpload } from "@/shared/lib/imageUpload";

export interface Post {
  comments: string[];
  content: string;
  createdAt: string;
  images: ImageUpload[];
  likes: User[];
  saves: User[];
  updatedAt: string;
  user: User;
  __v: number;
  _id: string;
}

export interface PostState {
  loading: boolean;
  posts: any[];
  resultPosts: number;
  error: string;
  inited: boolean;
}

export type PostProps = {
  post: Post;
};
