import React, { type FC } from "react";
import cls from "./Avatar.module.scss";
import { ClassNames } from "@/shared/lib/classNames";

export type AvatarSize = 22 | 32 | 56 | 150;
type AvatarVariant = "default" | "stories";

const sizeClasses: Record<AvatarSize, string> = {
  22: cls.size22,
  32: cls.size32,
  56: cls.size56,
  150: cls.size150,
};

const variantClasses: Record<AvatarVariant, string> = {
  default: cls.default,
  stories: cls.stories,
};

interface AvatarProps {
  size?: AvatarSize;
  variant?: AvatarVariant;
  className?: string;
  src?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { className, size = 32, variant = "default", src } = props;

  const classes = [
    size && sizeClasses[size],
    variant && variantClasses[variant],
    className,
  ];

  return (
    <div className={ClassNames(cls.avatar, {}, classes)}>
      {src ? <img src={src} alt="" /> : <div className={cls.noImage}>In</div>}
    </div>
  );
};
