import { AppLink, HStack, Text, VStack } from "@/shared/ui";
import cls from "./ProfilePosts.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { ClassNames } from "@/shared/lib/classNames";
import { getProfilePosts } from "@/entities/Profile/model/selectors/getUserPosts";
import { PostCommentModal } from "@/features/PostCommentModal/ui/PostCommentModal";
import { PostImage } from "@/features/PostImage/ui/PostImage";
export const ProfilePosts = () => {
  const profilePosts = useSelector(getProfilePosts);
  const buttons = ["ПУБЛИКАЦИИ", "СОХРАНЕННЫЕ", "REELS"];
  const [posts, setPosts] = useState("ПУБЛИКАЦИИ");

  return (
    <VStack>
      <VStack className={cls.postMenu}>
        <HStack>
          <hr className={cls.hr} />
        </HStack>

        <HStack className={cls.postMenuBtns}>
          {buttons.map((item) => (
            <button
              onClick={() => setPosts(item)}
              className={ClassNames(cls.button, {}, [
                posts === item ? cls.activeButton : null,
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
        {profilePosts.map((post) => (
          <PostImage post={post} />
        ))}
      </HStack>
    </VStack>
  );
};
