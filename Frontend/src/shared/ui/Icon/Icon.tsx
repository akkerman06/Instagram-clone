import { useContext, type FC } from "react";
import { IconType, iconName } from "./IconName";
import cls from "./Icon.module.scss";
import { ClassNames, Mods } from "@/shared/lib/classNames";
import { ThemeContext } from "@/app/provider";
import { Theme } from "@/shared/consts/Theme";

interface IconProps {
  type: IconType;
  className?: string;
  onClick?: () => void;
}

export const Icon: FC<IconProps> = ({ type, className = "", onClick }) => {
  const { theme } = useContext(ThemeContext);
  const mods: Mods = {
    [cls.dark]: theme === Theme.DARK,
  };
  return (
    <div onClick={onClick} className={ClassNames(cls.icon, mods, [className])}>
      {iconName[type]}
    </div>
  );
};
