import { Icon } from "@/shared/ui";
import { FC, useEffect, useState } from "react";
import cls from "./LikeBtn.module.scss";
import { Post, likePost, unLikePost } from "@/entities/PostCard";
import { User } from "@/entities/User/model/types/user";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { PostProps } from "@/entities/PostCard/model/types/post";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { ClassNames, Mods } from "@/shared/lib/classNames";

export const LikeBtn: FC<PostProps> = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const authData = useSelector(getAuthData);
  const dispatch = useAppDispatch();

  const onIsLike = async () => {
    if (isLoad) return;
    setIsLoad(true);
    await dispatch(likePost({ post, auth: authData }));
    setIsLoad(false);
  };
  const onUnLike = async () => {
    if (isLoad) return;
    setIsLoad(true);
    await dispatch(unLikePost({ post, auth: authData }));
    setIsLoad(false);
  };
  useEffect(() => {
    if (post.likes.find((item) => item._id === authData._id)) {
      setIsLike(true);
    }

    return () => setIsLike(false);
  }, [post.likes, authData._id]);

  const mods: Mods = {
    [cls.disabled]: isLoad,
  };
  return (
    <>
      {isLike ? (
        <Icon
          type="FavoriteRed"
          className={ClassNames(cls.like, mods, [])}
          onClick={onUnLike}
        />
      ) : (
        <Icon
          type="Favorite"
          className={ClassNames("", mods, [])}
          onClick={onIsLike}
        />
      )}
    </>
  );
};
