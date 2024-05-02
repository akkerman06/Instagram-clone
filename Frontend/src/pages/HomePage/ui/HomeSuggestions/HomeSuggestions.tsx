import { AppLink, HStack, Text, UserCard, VStack } from "@/shared/ui";
import { Button } from "antd";
import React, { FC } from "react";
import cls from "../HomePage/HomePage.module.scss";
import { HomeUserProps } from "../../model/types/home";
export const HomeSuggestions: FC<HomeUserProps> = ({ user }) => {
  return (
    <div>
      <VStack className={cls.rightSuggs} gap={16}>
        <HStack justify="between" align="center">
          <Text>Suggestions For You</Text>
          <AppLink to="/">
            <Text weight={700}>See All</Text>
          </AppLink>
        </HStack>
        <VStack gap={12}>
          {[1, 2, 3, 4, 5].map((item) => (
            <UserCard
              key={item}
              id={user?._id}
              size={32}
              src={user?.avatar}
              title={user?.fullname}
              content={"Followed by terylucas"}
            >
              <Button>Профиль</Button>
            </UserCard>
          ))}
        </VStack>
      </VStack>
    </div>
  );
};
