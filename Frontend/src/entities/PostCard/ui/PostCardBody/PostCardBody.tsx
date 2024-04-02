import React, { FC } from "react";
import cls from "./PostCardBody.module.scss";
import { PostProps } from "../../model/types/post";
import { Carousel } from "antd";
export const PostCardBody: FC<PostProps> = ({ post }) => {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className={cls.body}>
      <Carousel draggable>
        {post.images.map((img) => (
          <img src={img.url} />
        ))}
      </Carousel>
    </div>
  );
};
