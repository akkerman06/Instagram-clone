import React from "react";
import cls from "./PostCardFooter.module.scss";
import { HStack, Icon, Text, VStack } from "@/shared/ui";
export const PostCardFooter = () => {
  return (
    <VStack>
      <HStack className={cls.icons}>
        <HStack gap={12}>
          <Icon type="Favorite" />
          <Icon type="Comment" />
          <Icon type="SharePosts" />
        </HStack>

        <Icon type="Save" />
      </HStack>

      <VStack className={cls.body}>
        <Text weight={700}>1.088 likes</Text>
        <div>
          <Text weight={700} tag="span">
            ironman
          </Text>
          <Text weight={400} tag="span" className={cls.text}>
            bla bla bldfdnfsdnfsv,bvckbnvb m
          </Text>
        </div>
      </VStack>
    </VStack>
  );
};
