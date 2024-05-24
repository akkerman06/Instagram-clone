import { AppLink, HStack, Text, UserCard, VStack } from "@/shared/ui";
import { Button } from "antd";
import React, { FC, useEffect } from "react";
import cls from "../HomePage/HomePage.module.scss";
import { HomeUserProps } from "../../model/types/home";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getSuggestions } from "../../model/service/getSuggestions";
import { useSelector } from "react-redux";
import { getSuggestionsUsers } from "@/entities/Profile/model/selectors/getSuggestionsUsers";
export const HomeSuggestions: FC<HomeUserProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const suggestionsUsers = useSelector(getSuggestionsUsers);

  useEffect(() => {
    dispatch(getSuggestions());
  }, []);
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
          {suggestionsUsers.map((item) => (
            <UserCard
              key={item._id}
              id={item?._id}
              size={32}
              src={item?.avatar}
              title={item?.username}
              content={"Возможно вы знакомы с ним/ней"}
            >
              <Button href={`/profile/${item._id}`}>Профиль</Button>
            </UserCard>
          ))}
        </VStack>
      </VStack>
    </div>
  );
};
