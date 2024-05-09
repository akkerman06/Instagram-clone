import React, { FC } from "react";
import { PostCardHeader } from "../PostCardHeader/PostCardHeader";
import { PostCardBody } from "../PostCardBody/PostCardBody";
import { PostCardFooter } from "../PostCardFooter/PostCardFooter";
import cls from "./PostCard.module.scss";
import { VStack } from "@/shared/ui";
import { Post, PostProps } from "../../model/types/post";
import { PostCardComments } from "../PostCardComments/PostCardComments";

export const PostCard: FC<PostProps> = ({ post }) => {
  return (
    <VStack className={cls.postCard}>
      <PostCardHeader post={post} />
      <PostCardBody post={post} />
      <div className={cls.PostCardFooter}>
        <PostCardFooter postCommentModal={true} post={post} />
      </div>
      <PostCardComments post={post} />
    </VStack>
  );
};
