import { getAuthData } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { profileActions } from "../../model/slice/profileSlice";
import { getProfileUser } from "../../model/selectors/getProfileUser";
import { HStack, Spinner, Text, VStack } from "@/shared/ui";
import { Avatar, Button, Modal, Spin } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import cls from "./ProfileInfo.module.scss";
import { useProfile } from "../../model/consts/useProfile";
import { DropDown } from "@/shared/ui/Popups/DropDown/DropDown";
import { User } from "@/entities/User/model/types/user";
import { getProfileUserLoading } from "../../model/selectors/getProfileUserLoading";
import { EditProfile } from "../EditProfile/EditProfile";
import { FollowBtn } from "@/features";
import { FollowModal } from "../FollowModal/FollowModal";
import { useProfileModal } from "../../model/hooks/useProfileModal";
import { FollowEnum } from "../../model/types/profile";
import { getUserPosts } from "../../model/service/getUserPosts";
import { getProfilePosts } from "../../model/selectors/getUserPosts";
import { ProfilePosts } from "@/features/ProfilePosts/ui/ProfilePosts";
import { getUserPostLoading } from "../../model/selectors/getUserPostLoading";

interface ProfileInfoProps {
  id: string;
  users: User[];
}

export const ProfileInfo: FC<ProfileInfoProps> = ({ id, users }) => {
  const authData = useSelector(getAuthData);
  const profileLoading = useSelector(getProfileUserLoading);
  const profilePosts = useSelector(getProfilePosts);
  // const profilePostInited = useSelector(getUserPostInited);
  const profilePostsLoading = useSelector(getUserPostLoading);
  const dispatch = useAppDispatch();
  const user = useSelector(getProfileUser);
  const dropDownDotsItems = useProfile(authData._id === id);

  const {
    isOpen,
    isFollowModal,
    onClose,
    onOpen,
    onCloseFollowModal,
    onOpenFollowersModal,
    onOpenFollowingModal,
  } = useProfileModal();

  useEffect(() => {
    if (authData._id === id) {
      dispatch(profileActions.setProfileUser(authData));
    } else {
      const newUser = users.find((item) => item._id === id);
      if (newUser) dispatch(profileActions.setProfileUser(newUser));
    }
  }, [id, authData, users]);

  useEffect(() => {
    dispatch(getUserPosts({ id }));
  }, [dispatch, id]);
  if (profileLoading) {
    return (
      <HStack justify="center">
        <Spinner size="m" />
      </HStack>
    );
  }

  return (
    <HStack max className={cls.profileInfo}>
      {user && (
        <VStack gap={36}>
          <HStack className={cls.profileInfo} gap={40}>
            <Avatar size={150} src={user?.avatar} />

            <VStack gap={32}>
              <HStack align="center" gap={28}>
                <Text>@{user.username}</Text>

                {authData._id === id ? (
                  <Button onClick={onOpen} type="default">
                    Изменить
                  </Button>
                ) : (
                  <FollowBtn user={user} id={id} />
                )}

                <Modal
                  open={isOpen}
                  title={
                    <Text size={14} color="black">
                      Edit Profile
                    </Text>
                  }
                  centered
                  onCancel={onClose}
                  footer={null}
                >
                  <EditProfile onClose={onClose} auth={authData} />
                </Modal>

                <DropDown items={dropDownDotsItems}>
                  <EllipsisOutlined style={{ fontSize: 35 }} />
                </DropDown>
              </HStack>

              <HStack gap={26} max={false}>
                <HStack gap={8}>
                  <Text weight={700} color="black" size={14}>
                    {profilePosts.length}
                  </Text>
                  <Text>постов</Text>
                </HStack>

                <HStack
                  gap={8}
                  onClick={onOpenFollowersModal}
                  className={cls.follow}
                  max={false}
                >
                  <Text weight={700} color="black" size={14}>
                    {user.followers.length}
                  </Text>
                  <Text>подписчиков</Text>
                </HStack>

                <HStack
                  gap={8}
                  onClick={onOpenFollowingModal}
                  className={cls.follow}
                  max={false}
                >
                  <Text weight={700} color="black" size={14}>
                    {user.following.length}
                  </Text>
                  <Text>подписок</Text>
                </HStack>
              </HStack>

              <Modal
                open={isFollowModal.isOpen}
                title={
                  <Text size={14} color="black">
                    {isFollowModal.view === FollowEnum.FOLLOWERS
                      ? "Подписчики"
                      : "Подписки"}
                  </Text>
                }
                centered
                onCancel={onCloseFollowModal}
                footer={null}
              >
                <FollowModal
                  data={
                    isFollowModal.view === FollowEnum.FOLLOWERS
                      ? user.followers
                      : user.following
                  }
                />
              </Modal>

              <VStack gap={8}>
                <Text color="black" size={18} weight={900}>
                  {user.fullname}
                </Text>
                <Text size={14} weight={400}>
                  {user.mobile}
                </Text>
                <Text size={18} weight={400}>
                  {user.address}
                </Text>
                {/* <Text size={18} weight={400}>
                  <a href={user.website} target="_blank">
                    {user.website}
                  </a>
                </Text> */}
              </VStack>
            </VStack>
          </HStack>

          <ProfilePosts postsLoading={profilePostsLoading} />
        </VStack>
      )}
    </HStack>
  );
};
