import { getAuthData } from "@/entities/User";
import { PostList } from "@/features/PostLists/ui/PostList/PostList";
import { HStack, VStack } from "@/shared/ui";
import { useSelector } from "react-redux";
import { HomeStories } from "../HomeStories/HomeStories";
import { HomeSuggestions } from "../HomeSuggestions/HomeSuggestions";
import { HomeUserCard } from "../HomeUserCard/HomeUserCard";
import cls from "./HomePage.module.scss";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useEffect } from "react";
import { getFetchPosts } from "../../model/service/getFetchPosts";
import { getPostsInited } from "@/entities/PostCard";
import { PostCommentModal } from "@/features/PostCommentModal/ui/PostCommentModal";
export const HomePage = () => {
  const authData = useSelector(getAuthData);
  const isInitedPosts = useSelector(getPostsInited);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isInitedPosts) {
      dispatch(getFetchPosts());
    }
  }, [isInitedPosts, dispatch]);
  return (
    <HStack className={cls.home} gap={28}>
      <VStack className={cls.left} gap={22}>
        <HomeStories />
        <PostList />
      </VStack>
      <VStack className={cls.right}>
        <HomeUserCard user={authData} />
        <HomeSuggestions user={authData} />
      </VStack>
    </HStack>
  );
};
