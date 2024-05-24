import { HStack, Skeleton } from "@/shared/ui";
import React from "react";

const PostImageSkeleton = () => {
  return (
    <HStack gap={12}>
      <Skeleton width={263} height={270} radius={0} />
      <Skeleton width={263} height={270} radius={0} />
      <Skeleton width={263} height={270} radius={0} />
    </HStack>
  );
};

export default PostImageSkeleton;
