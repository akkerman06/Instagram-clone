import { Post } from "@/entities/PostCard";
import React, { FC, useState } from "react";
import cls from "./PostImage.module.scss";
import { PostCommentModal } from "@/features/PostCommentModal/ui/PostCommentModal";
interface PostImageProps {
  post: Post;
  image?: string;
}

export const PostImage: FC<PostImageProps> = ({ post, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className={cls.postimage}>
        <img
          onClick={onOpen}
          className={cls.image}
          src={post.images[0].url}
        ></img>
        <PostCommentModal isOpen={isOpen} onClose={onClose} post={post} />
      </div>
    </div>
  );
};
