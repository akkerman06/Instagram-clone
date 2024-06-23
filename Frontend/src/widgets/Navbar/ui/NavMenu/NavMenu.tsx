import { INavMenuItem } from "../../model/consts/NavMenu";
import { Icon } from "@/shared/ui/Icon/Icon";
import cls from "./NavMenu.module.scss";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { useState } from "react";
import { AddPostModal, SwitchButton } from "@/features";
import { ClassNames } from "@/shared/lib/classNames";
import { Link } from "react-router-dom";
import { LangSwitch } from "@/widgets/LangSwitch/ui/LangSwitch";
import { DropDown } from "@/shared/ui/Popups/DropDown/DropDown";
import { MenuProps } from "antd";
import { AppLink, Text } from "@/shared/ui";
import { useSelector } from "react-redux";
import { getAuthData, logout } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
export const NavMenu = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const authData = useSelector(getAuthData);

  const dispatch = useAppDispatch();

  const onClose = () => {
    setIsOpenModal(false);
  };
  const navMenuItems: INavMenuItem[] = [
    {
      href: "/",
      iconType: "Home",
    },
    {
      href: "/login",
      iconType: "Messenger",
    },
    {
      iconType: "NewPosts",
      onClick: () => setIsOpenModal(true),
    },
    {
      href: "/register",
      iconType: "FindPeople",
    },
    // {
    //   href: "/",
    //   iconType: "Save",
    // },
  ];

  const dropDownItems: MenuProps["items"] = [
    {
      label: <Text color="blue">{authData.fullname}</Text>,
      key: "0",
    },
    {
      label: (
        <AppLink to={`/profile/${authData._id}`}>
          <Text color="black">Профиль</Text>
        </AppLink>
      ),
      key: "1",
    },
    {
      label: (
        <AppLink to={"/getSavePosts"}>
          <Text color="black">Сохраненные</Text>
        </AppLink>
      ),
      key: "2",
    },
    {
      label: <Text color="black">Настройки</Text>,
      key: "3",
    },
    {
      label: <Text color="black">Выйти</Text>,
      onClick: () => dispatch(logout()),
      key: "4",
    },
  ];
  return (
    <nav className={cls.nav}>
      <ul className={cls.list}>
        {navMenuItems.map((item) => (
          <li key={item.iconType} className={ClassNames(cls.item, {}, [])}>
            {item.href ? (
              <Link to={item.href} className={cls.link}>
                <Icon className={cls.icon} type={item.iconType} />
              </Link>
            ) : (
              <Icon type={item.iconType} onClick={item.onClick} />
            )}
          </li>
        ))}
        <AddPostModal isOpen={isOpenModal} onClose={onClose} />
        <li>
          <SwitchButton />
        </li>

        <li>
          <LangSwitch />
        </li>

        <li>
          <DropDown items={dropDownItems} placement="bottomRight">
            <a href="" onClick={(e) => e.preventDefault()}>
              <Avatar src={authData.avatar} size={32}></Avatar>
            </a>
          </DropDown>
        </li>
      </ul>
    </nav>
  );
};
