import { User } from "@/entities/User/model/types/user";
import { AppLink, Avatar, HStack, Text, VStack } from "@/shared/ui";
import { FC } from "react";
import cls from "./UserComment.module.scss";
interface UserCommentProps {
  img: string;
  username: string;
  content: string;
  likes: User[];
  userId: string;
}

export const UserComment: FC<UserCommentProps> = ({
  img,
  username,
  content,
  likes,
  userId,
}) => {
  return (
    <HStack gap={12}>
      <AppLink to={`/profile/${userId}`}>
        <Avatar src={img} size={32}></Avatar>
      </AppLink>
      <VStack>
        <HStack gap={12}>
          <AppLink to={`/profile/${userId}`}>
            <Text color="black" weight={900}>
              {username}
            </Text>
          </AppLink>
          <Text color="black">{content}</Text>
        </HStack>
        <HStack gap={22}>
          <Text size={12} weight={700}>
            2дн.
          </Text>
          <HStack gap={28}>
            <Text color="black" size={12} weight={700}>
              "Нравиться": {likes.length}
            </Text>
            <Text color="black" size={12} clickable weight={700}>
              Ответить
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
};
