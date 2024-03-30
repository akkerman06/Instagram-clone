import React from "react";
import { PostCardHeader } from "../PostCardHeader/PostCardHeader";
import { PostCardBody } from "../PostCardBody/PostCardBody";
import { PostCardFooter } from "../PostCardFooter/PostCardFooter";
import cls from "./PostCard.module.scss";
import { VStack } from "@/shared/ui";
export const PostCard = () => {
  return (
    <VStack className={cls.postCard}>
      <PostCardHeader />
      <PostCardBody />
      <PostCardFooter />
      <div className="commets"> </div>
      <div className="addCommentInput "> </div>
    </VStack>
  );
};
