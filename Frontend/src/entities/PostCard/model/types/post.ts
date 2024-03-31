import { User } from "@/entities/User/model/types/user";
import { ImageUpload } from "@/shared/lib/imageUpload";

export interface Post {
  comments: string[];
  content: string;
  createdAt: string;
  images: ImageUpload[];
  likes: string[];
  updatedAt: string;
  user: User;
  __v: number;
  _id: string;
}

export interface PostState {
  loading: boolean;
  posts: any[];
}

export type PostProps = {
  post: Post;
};
