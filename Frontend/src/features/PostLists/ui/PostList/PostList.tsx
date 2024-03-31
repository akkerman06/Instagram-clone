import { getDataPosts } from "@/entities/PostCard";
import { PostCard } from "@/entities/PostCard/ui/PostCard/PostCard";
import { Text, VStack } from "@/shared/ui";
import React from "react";
import { useSelector } from "react-redux";

export const PostList = () => {
  const postsData = useSelector(getDataPosts);
  return (
    <VStack>
      {postsData.length > 0 ? (
        postsData.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <Text color="black" size={18}>
          Постов пока нет
        </Text>
      )}
    </VStack>
  );
};
