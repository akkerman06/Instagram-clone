import { HStack, Text, VStack } from "@/shared/ui";
import cls from "./ProfilePosts.module.scss";
import { useSelector } from "react-redux";
import { FC, useState } from "react";
import { ClassNames } from "@/shared/lib/classNames";
import { getProfilePosts } from "@/entities/Profile/model/selectors/getUserPosts";
import { PostImage } from "@/features/PostImage/ui/PostImage";
import PostImageSkeleton from "@/features/PostImage/ui/PostImageSkeleton";

interface ProfilePostsProps {
  postsLoading: boolean;
}

export const ProfilePosts: FC<ProfilePostsProps> = ({ postsLoading }) => {
  const profilePosts = useSelector(getProfilePosts);
  const buttons = ["ПУБЛИКАЦИИ", "REELS"];
  const [postsFilter, setPostsFilter] = useState("ПУБЛИКАЦИИ");

  return (
    <VStack>
      <VStack className={cls.postMenu}>
        <HStack>
          <hr className={cls.hr} />
        </HStack>

        <HStack className={cls.postMenuBtns}>
          {buttons.map((item) => (
            <button
              onClick={() => setPostsFilter(item)}
              className={ClassNames(cls.button, {}, [
                postsFilter === item ? cls.activeButton : null,
              ])}
            >
              <Text className={cls.text} weight={900}>
                {item}
              </Text>
            </button>
          ))}
        </HStack>
      </VStack>
      <HStack className={cls.profilePosts}>
        {postsLoading && <PostImageSkeleton />}
        {profilePosts.map((post) => (
          <PostImage post={post} />
        ))}
      </HStack>
    </VStack>
  );
};
