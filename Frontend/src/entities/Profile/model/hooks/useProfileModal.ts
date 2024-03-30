import { useCallback, useState } from "react";
import { FollowEnum, FollowModalType } from "../../model/types/profile";
import { profileActions } from "../slice/profileSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

export const useProfileModal = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isFollowModal, setIsFollowModal] = useState<FollowModalType>({
    isOpen: false,
    view: FollowEnum.FOLLOWERS,
  });

  const onOpen = () => {
    setIsOpen(true);
    dispatch(profileActions.setClearMessage());
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpenFollowersModal = useCallback(() => {
    setIsFollowModal({
      isOpen: true,
      view: FollowEnum.FOLLOWERS,
    });
  }, [isFollowModal]);
  const onOpenFollowingModal = useCallback(() => {
    setIsFollowModal({
      isOpen: true,
      view: FollowEnum.FOLLOWING,
    });
  }, [isFollowModal]);
  const onCloseFollowModal = useCallback(() => {
    setIsFollowModal((prev: FollowModalType) => {
      return { ...prev, isOpen: false };
    });
  }, []);

  return {
    isOpen,
    isFollowModal,
    onClose,
    onOpen,
    onCloseFollowModal,
    onOpenFollowersModal,
    onOpenFollowingModal,
  };
};
