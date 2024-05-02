import React, { FC } from "react";
import cls from "./PostCardFooter.module.scss";
import { HStack, Icon, Text, VStack } from "@/shared/ui";
import { PostProps } from "../../model/types/post";
import { LikeBtn } from "@/features/LikeBtn/LikeBtn";
import { useSelector } from "react-redux";

export const PostCardFooter: FC<PostProps> = ({ post }) => {
  return (
    <VStack>
      <HStack className={cls.icons}>
        <HStack gap={12}>
          <LikeBtn post={post} />
          <Icon type="Comment" />
          <Icon type="SharePosts" />
        </HStack>

        <Icon type="Save" />
      </HStack>

      <VStack className={cls.body}>
        <Text weight={700}>{post.likes.length} likes</Text>
        <div>
          <Text weight={700} tag="span">
            {post.user.username}:
          </Text>
          <Text color="black" weight={400} tag="span" className={cls.text}>
            {post.content}
          </Text>
        </div>
      </VStack>
    </VStack>
  );
};
