import { FC, ReactNode, memo } from "react";
import { HStack } from "../Stack/HStack";
import { VStack } from "../Stack/VStack";
import { AppLink } from "../AppLink/AppLink";
import { Text } from "../Text/Text";
import { ClassNames } from "@/shared/lib/classNames";
import cls from "./UserCard.module.scss";
import { Avatar, AvatarSize } from "../Avatar/Avatar";
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
  size?: AvatarSize;
}

export const UserCard: FC<UserCardProps> = memo((props) => {
  const { src, className, id, title, content, onclick, children, size } = props;

  const sizeClasses: Record<AvatarSize, string> = {
    "22": cls.size22,
    "32": cls.size32,
    "56": cls.size56,
    "150": cls.size150,
  };
  return (
    <HStack
      className={ClassNames("", {}, [className])}
      justify="center"
      align="center"
    >
      <HStack
        gap={16}
        className={ClassNames(cls.userCard, {}, [sizeClasses[size]])}
        onClick={onclick}
        align="center"
      >
        <Avatar size={size} src={src && src} />

        <VStack gap={0}>
          <Text size={14} line={12} color="blue" weight={700} tag="span">
            <AppLink to={`/profile/${id}`}>{title}</AppLink>
          </Text>
          {content && <Text tag="span">{content}</Text>}
        </VStack>
      </HStack>
      {children}
    </HStack>
  );
});
