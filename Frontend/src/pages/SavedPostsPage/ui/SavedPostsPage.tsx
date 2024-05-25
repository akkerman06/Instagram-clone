import { PostImage } from "@/features/PostImage/ui/PostImage";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import React, { useEffect } from "react";
import cls from "./SavedPostsPage.module.scss";
import { useSelector } from "react-redux";
import { HStack, Text } from "@/shared/ui";
import { getSavedPosts } from "../model/service/getSavedPosts";
import { getSavedPostsSelector } from "../model/selectors/getSavedPostsSelector";
const SavedPostsPage = () => {
  const dispatch = useAppDispatch();
  const postsData = useSelector(getSavedPostsSelector);
  useEffect(() => {
    dispatch(getSavedPosts());
  }, []);
  console.log(postsData);
  return (
    <HStack className={cls.container}>
      <HStack gap={22} className={cls.posts}>
        {postsData?.length > 0 ? (
          postsData.map((post) => <PostImage key={post._id} post={post} />)
        ) : (
          <Text color="black" size={18}>
            Постов пока нет
          </Text>
        )}
      </HStack>
    </HStack>
  );
};

export default SavedPostsPage;
