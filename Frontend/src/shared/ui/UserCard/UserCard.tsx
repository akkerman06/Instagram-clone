import { FC, ReactNode, memo } from "react";
import { HStack } from "../Stack/HStack";
import { VStack } from "../Stack/VStack";
import { AppLink } from "../AppLink/AppLink";
import { Text } from "../Text/Text";
import { ClassNames } from "@/shared/lib/classNames";
import cls from "./UserCard.module.scss";
import { Avatar } from "../Avatar/Avatar";
interface UserCardProps {
  className?: string;
  id?: string;
  src?: string;
  alt?: string;
  to?: string;
  title: string;
  content: string;
  onclick?: () => void;
  children?: ReactNode;
}

export const UserCard: FC<UserCardProps> = memo((props) => {
  const { src, className, id, title, content, onclick, children } = props;

  return (
    <HStack
      justify="between"
      gap={16}
      className={ClassNames(cls.userCard, {}, [className])}
      onClick={onclick}
    >
      <Avatar src={src && src} />

      <VStack gap={8}>
        <Text size={14} color="blue" weight={700} tag="span">
          <AppLink to={`/profile/${id}`}>{title}</AppLink>
        </Text>
        <Text>{content}</Text>
      </VStack>
      {children}
    </HStack>
  );
});
