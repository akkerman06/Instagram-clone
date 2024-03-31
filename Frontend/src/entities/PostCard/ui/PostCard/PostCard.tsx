import React, { FC } from "react";
import { PostCardHeader } from "../PostCardHeader/PostCardHeader";
import { PostCardBody } from "../PostCardBody/PostCardBody";
import { PostCardFooter } from "../PostCardFooter/PostCardFooter";
import cls from "./PostCard.module.scss";
import { VStack } from "@/shared/ui";
import { Post, PostProps } from "../../model/types/post";

export const PostCard: FC<PostProps> = ({ post }) => {
  return (
    <VStack className={cls.postCard}>
      <PostCardHeader post={post} />
      <PostCardBody post={post} />
      <PostCardFooter />
      <div className="commets"> </div>
      <div className="addCommentInput "> </div>
    </VStack>
  );
};
