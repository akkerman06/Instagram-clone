import { PostList } from "@/features/PostLists/ui/PostList/PostList";
import { AppLink, HStack, Text, UserCard, VStack } from "@/shared/ui";
import cls from "./HomePage.module.scss";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { Button } from "antd";
export const HomePage = () => {
  const authData = useSelector(getAuthData);
  return (
    <HStack className={cls.home} gap={28}>
      <VStack className={cls.left} gap={22}>
        <div>Slider</div>
        <PostList />
      </VStack>
      <VStack className={cls.right}>
        <HStack>
          <UserCard
            id={authData?._id}
            size={56}
            src={authData?.avatar}
            title={authData?.fullname}
            content={authData?.username}
          >
            <Button>Профиль</Button>{" "}
          </UserCard>
        </HStack>

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
                id={authData?._id}
                size={32}
                src={authData?.avatar}
                title={authData?.fullname}
                content={"Followed by terylucas"}
              >
                <Button>Профиль</Button>{" "}
              </UserCard>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </HStack>
  );
};
