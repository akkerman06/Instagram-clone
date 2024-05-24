import { Icon } from "@/shared/ui";
import { FC, useEffect, useState } from "react";
import cls from "./SaveBtn.module.scss";
import { Post, likePost, unLikePost } from "@/entities/PostCard";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { PostProps } from "@/entities/PostCard/model/types/post";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { ClassNames, Mods } from "@/shared/lib/classNames";
import { savePost } from "@/entities/PostCard/model/service/savePost";
import { UnSavePost } from "@/entities/PostCard/model/service/unSavePost";

export const SaveBtn: FC<PostProps> = ({ post }) => {
  const [isSave, setIsSave] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const authData = useSelector(getAuthData);
  const dispatch = useAppDispatch();

  const onIsSave = async () => {
    if (isLoad) return;
    setIsLoad(true);
    await dispatch(savePost({ post, auth: authData }));
    setIsLoad(false);
  };
  const unIsSave = async () => {
    if (isLoad) return;
    setIsLoad(true);
    await dispatch(UnSavePost({ post, auth: authData }));
    setIsLoad(false);
  };
  useEffect(() => {
    if (post.saves.find((item) => item._id === authData._id)) {
      setIsSave(true);
    }

    return () => setIsSave(false);
  }, [post.saves, authData._id]);

  const mods: Mods = {
    [cls.disabled]: isLoad,
  };
  return (
    <>
      {isSave ? (
        <Icon
          type="UnSave"
          className={ClassNames(cls.unSave, mods, [])}
          onClick={unIsSave}
        />
      ) : (
        <Icon
          type="Save"
          className={ClassNames(cls.save, mods, [])}
          onClick={onIsSave}
        />
      )}
    </>
  );
};
