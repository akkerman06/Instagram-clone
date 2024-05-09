import { User } from "@/entities/User/model/types/user";
import { ImageUpload } from "@/shared/lib/imageUpload";

export interface Comment {
  content: string;
  likes: User[];
  __v: number;
  _id: string;
  postId: string;
  postUserId: string;
  reply: any;
}

export interface PostState {
  loading: boolean;
  posts: any[];
  resultPosts: number;
  error: string;
  inited: boolean;
}
