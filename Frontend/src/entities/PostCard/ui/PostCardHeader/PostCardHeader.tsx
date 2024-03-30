import React from "react";
import cls from "./PostCardHeader.module.scss";
import { UserCard } from "@/shared/ui";
import { EllipsisOutlined } from "@ant-design/icons";

export const PostCardHeader = () => {
  return (
    <div className={cls.header}>
      <UserCard src="" id="" title="terryrter" content="" size={32}>
        <EllipsisOutlined />
      </UserCard>
    </div>
  );
};
