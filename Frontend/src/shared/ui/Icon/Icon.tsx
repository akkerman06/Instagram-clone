import { type FC } from "react";
import { IconType, iconName } from "./IconName";
import cls from "./Icon.module.scss";
import { ClassNames } from "@/shared/lib/classNames";

interface IconProps {
  type: IconType;
  className?: string;
  onClick?: () => void;
}

export const Icon: FC<IconProps> = ({ type, className = "", onClick }) => {
  return (
    <div onClick={onClick} className={ClassNames(cls.icon, {}, [className])}>
      {iconName[type]}
    </div>
  );
};
