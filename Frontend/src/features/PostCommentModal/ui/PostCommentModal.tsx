import { Post, PostProps } from "@/entities/PostCard/model/types/post";
import { Button, Carousel, ConfigProvider, Modal } from "antd";
import React, { FC } from "react";
import cls from "./PostCommentModal.module.scss";
import { HStack, Text, UserCard, VStack } from "@/shared/ui";
import { EllipsisOutlined } from "@ant-design/icons";
import { UserComment } from "@/features/UserComment/ui/UserComment";
import { PostCardFooter } from "@/entities/PostCard/ui/PostCardFooter/PostCardFooter";
import { PostCardComments } from "@/entities/PostCard/ui/PostCardComments/PostCardComments";
import AddComment from "@/features/AddComment/ui/AddComment";

interface PostCommentModalProps {
  post: Post;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export const PostCommentModal: FC<PostCommentModalProps> = ({
  post,
  isOpen = true,
  onOpen,
  onClose,
}) => {
  const { user } = post;
  const { comments } = post;
  console.log(post);
  return (
    <div>
      <Modal
        footer={[
          <Button onClick={onClose} type="primary">
            Ok
          </Button>,
        ]}
        closable={false}
        maskClosable={false}
        className={cls.modal}
        width={1200}
        open={isOpen}
      >
        <HStack className={cls.modalContent}>
          <div className={cls.imgContent}>
            <Carousel draggable>
              {post.images.map((img) => (
                <div key={img.public_id}>
                  <img className={cls.img} src={img.url} />
                </div>
              ))}
            </Carousel>
          </div>
          <VStack className={cls.mainContent}>
            <div className={cls.mainContentWrap}>
              <UserCard
                className={cls.postUserBlock}
                src={user?.avatar}
                id={user?._id}
                title={user.fullname}
                content={user.username}
                size={32}
              >
                <EllipsisOutlined />
              </UserCard>
              <VStack className={cls.postUserComments}>
                {comments.map((comment: any) => (
                  <UserComment
                    userId={comment.user._id}
                    img={comment.user.avatar}
                    username={comment.user.username}
                    content={comment.content}
                    likes={comment.likes}
                  />
                ))}
              </VStack>

              <PostCardFooter
                className={cls.postCardFooterBlock}
                postCommentModal={false}
                post={post}
              />
              <PostCardComments post={post} />
            </div>
          </VStack>
        </HStack>
      </Modal>
    </div>
  );
};
