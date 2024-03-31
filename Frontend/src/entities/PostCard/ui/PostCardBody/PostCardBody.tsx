import React, { FC } from "react";
import cls from "./PostCardBody.module.scss";
import { PostProps } from "../../model/types/post";
export const PostCardBody: FC<PostProps> = ({ post }) => {
  return (
    <div className={cls.body}>
      {/* {post.images.map((img) => (
        <div>
          <img src="" alt="" />
        </div>
      ))} */}
      <img src={post.images[0].url} alt="" />
    </div>
  );
};
