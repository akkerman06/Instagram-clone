import {
  Post,
  PostCard,
  PostCardSkeleton,
  getDataPosts,
  getPostsLoading,
} from "@/entities/PostCard";
import { Text, VStack } from "@/shared/ui";
import { FC } from "react";

interface PostListProps {
  postsData: Post[];
  loading?: boolean;
}

export const PostList: FC<PostListProps> = ({ postsData, loading }) => {
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
      {postsData?.length > 0 ? (
        postsData.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <Text color="black" size={18}>
          Постов пока нет
        </Text>
      )}
    </VStack>
  );
};
