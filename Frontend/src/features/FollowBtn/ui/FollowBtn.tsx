import { followUser } from "@/entities/Profile";
import { unfollowUser } from "@/entities/Profile/model/service/unFollow";
import { getAuthData } from "@/entities/User";
import { User } from "@/entities/User/model/types/user";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Button } from "antd";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface FollowBtnProps {
  user: User;
  id?: string;
}

export const FollowBtn: FC<FollowBtnProps> = ({ user, id }) => {
  const [follow, setFollow] = useState(false);
  const [load, setLoad] = useState(false);
  const authData = useSelector(getAuthData);
  const dispatch = useAppDispatch();
  const onFollow = async () => {
    if (load) return;
    setLoad(true);
    await dispatch(followUser({ user, auth: authData, id }));
    setLoad(false);
  };
  const unFollow = async () => {
    if (load) return;
    setLoad(true);
    await dispatch(unfollowUser({ user, auth: authData }));
    setLoad(false);
  };
  useEffect(() => {
    if (authData?.following.find((item) => item._id === id)) {
      setFollow(true);
    }

    return () => setFollow(false);
  }, [authData?.following, id]);
  return (
    <>
      {follow ? (
        <Button danger onClick={unFollow} disabled={load}>
          Отписаться
        </Button>
      ) : (
        <Button type="primary" onClick={onFollow} disabled={load}>
          Подписаться
        </Button>
      )}
    </>
  );
};
