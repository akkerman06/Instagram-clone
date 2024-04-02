import { HStack, Skeleton, VStack } from "@/shared/ui";

export const PostCardSkeleton = () => {
  return (
    <VStack gap={12}>
      <HStack justify="between" align="center">
        <HStack align="center" gap={12}>
          <Skeleton width={32} height={32} radius={100} />
          <Skeleton width={70} height={15} radius={5} />
        </HStack>
        <Skeleton width={30} height={10} radius={2} />
      </HStack>

      <Skeleton width={"100%"} height={400} />

      <HStack justify="between" align="center">
        <HStack align="center" gap={12}>
          <Skeleton width={30} height={30} radius={100} />
          <Skeleton width={30} height={30} radius={100} />
          <Skeleton width={30} height={30} radius={100} />
        </HStack>
        <Skeleton width={30} height={30} radius={100} />
      </HStack>

      <VStack gap={4}>
        <Skeleton width={"100%"} height={15} radius={10} />
        <Skeleton width={"70%"} height={15} radius={10} />
      </VStack>

      <HStack gap={8}>
        <Skeleton width={20} height={20} radius={100} />
        <Skeleton width={"100%"} height={20} radius={10} />
        <Skeleton width={30} height={20} radius={10} />
      </HStack>
    </VStack>
  );
};
