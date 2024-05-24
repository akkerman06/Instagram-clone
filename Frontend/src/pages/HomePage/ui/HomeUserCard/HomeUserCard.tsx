import { User } from "@/entities/User/model/types/user";
import { UserCard } from "@/shared/ui";
import { Button } from "antd";
import React, { FC } from "react";
import { HomeUserProps } from "../../model/types/home";
import cls from "../HomePage/HomePage.module.scss";
export const HomeUserCard: FC<HomeUserProps> = ({ user }) => {
  return (
    <div>
      <UserCard
        className={cls.HomeUserCard}
        id={user?._id}
        size={56}
        src={user?.avatar}
        title={user?.fullname}
        content={user?.username}
      >
        <Button>Профиль</Button>
      </UserCard>
    </div>
  );
};
