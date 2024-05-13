import React, { FC, useState } from "react";
import cls from "./PostCardFooter.module.scss";
import { HStack, Icon, Text, VStack } from "@/shared/ui";
import { Post, PostProps } from "../../model/types/post";
import { LikeBtn } from "@/features/LikeBtn/LikeBtn";
import { useSelector } from "react-redux";
import { PostCommentModal } from "@/features/PostCommentModal/ui/PostCommentModal";
import { ClassNames } from "@/shared/lib/classNames";

interface PostCardFooterProps {
  post: Post;
  postCommentModal?: boolean;
  className?: string;
}

export const PostCardFooter: FC<PostCardFooterProps> = ({
  post,
  postCommentModal = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <VStack className={ClassNames(cls.postFooter, {}, [className])}>
      <HStack className={cls.icons}>
        <HStack gap={12}>
          <LikeBtn post={post} />
          <Icon onClick={onOpen} className={cls.postIcon} type="Comment" />
          <Icon className={cls.postIcon} type="SharePosts" />
        </HStack>

        <Icon className={cls.postIcon} type="Save" />
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

      {postCommentModal ? (
        <PostCommentModal onClose={onClose} isOpen={isOpen} post={post} />
      ) : (
        ""
      )}
    </VStack>
  );
};
