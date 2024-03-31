import React, { FC } from "react";
import cls from "./PostCardHeader.module.scss";
import { UserCard } from "@/shared/ui";
import { EllipsisOutlined } from "@ant-design/icons";
import { PostProps } from "../../model/types/post";

export const PostCardHeader: FC<PostProps> = ({ post }) => {
  const { user } = post;
  return (
    <div className={cls.header}>
      <UserCard
        src={user?.avatar}
        id={user?._id}
        title={user.fullname}
        content={user.username}
        size={32}
      >
        <EllipsisOutlined />
      </UserCard>
    </div>
  );
};
