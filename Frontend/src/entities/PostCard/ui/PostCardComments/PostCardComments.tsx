import AddComment from "@/features/AddComment/ui/AddComment";
import { FC } from "react";

export const PostCardComments: FC<any> = ({ post }) => {
  return <AddComment post={post} />;
};
