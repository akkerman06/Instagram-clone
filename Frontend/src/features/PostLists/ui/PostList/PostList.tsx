import {
  PostCard,
  PostCardSkeleton,
  getDataPosts,
  getPostsLoading,
} from "@/entities/PostCard";
import { HStack, Skeleton, Text, VStack } from "@/shared/ui";
import React from "react";
import { useSelector } from "react-redux";

export const PostList = () => {
  const postsData = useSelector(getDataPosts);
  const loading = useSelector(getPostsLoading);

  if (loading) {
    return (
      <VStack gap={22}>
        {[1, 2, 3, 4].map((item, index) => (
          <PostCardSkeleton key={index} />
        ))}
      </VStack>
    );
  }
  return (
    <VStack gap={22}>
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
