import { FC } from "react";
import cls from "./PostCardBody.module.scss";
import { PostProps } from "../../model/types/post";
import { Carousel } from "antd";
export const PostCardBody: FC<PostProps> = ({ post }) => {
  return (
    <div className={cls.body}>
      <Carousel draggable>
        {post.images.map((img) => (
          <div key={img.public_id}>
            <img src={img.url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
