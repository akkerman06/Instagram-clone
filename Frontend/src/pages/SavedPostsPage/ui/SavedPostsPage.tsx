import { PostImage } from "@/features/PostImage/ui/PostImage";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import React, { useEffect } from "react";
import cls from "./SavedPostsPage.module.scss";
import { useSelector } from "react-redux";
import { HStack, Spinner, Text, VStack } from "@/shared/ui";
import { getSavedPosts } from "../model/service/getSavedPosts";
import { getSavedPostsSelector } from "../model/selectors/getSavedPostsSelector";
import { getSavedPostsLoading } from "../model/selectors/getSavedPostsLoading";
const SavedPostsPage = () => {
  const dispatch = useAppDispatch();
  const postsData = useSelector(getSavedPostsSelector);
  const postsLoading = useSelector(getSavedPostsLoading);
  useEffect(() => {
    dispatch(getSavedPosts());
  }, []);
  console.log(postsData);
  if (postsLoading) {
    return (
      <HStack className="spinner" justify="center">
        <Spinner size="s" />
      </HStack>
    );
  }
  return (
    <VStack className={cls.container}>
      <VStack align="center" gap={4}>
        <Text weight={900} color="black" size={28}>
          Сохраненные посты
        </Text>
        <hr className={cls.hr} />
      </VStack>

      <HStack gap={22} className={cls.posts}>
        {postsData?.length > 0 ? (
          postsData.map((post) => <PostImage key={post._id} post={post} />)
        ) : (
          <Text color="black" size={18}>
            Постов пока нет
          </Text>
        )}
      </HStack>
    </VStack>
  );
};

export default SavedPostsPage;
