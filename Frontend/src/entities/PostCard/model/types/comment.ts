import { User } from "@/entities/User/model/types/user";

export interface PostComment {
  content: string;
  user: User;
  postId: string;
  postUserId: string;
  __v: number;
  _id: string;
}
