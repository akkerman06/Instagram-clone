import { FC, ReactNode, useContext } from "react";
import cls from "./Text.module.scss";
import { ClassNames, Mods } from "@/shared/lib/classNames";
import { ThemeContext } from "@/app/provider";
import { Theme } from "@/shared/consts/Theme";

export type TextWeight = 200 | 400 | 500 | 600 | 700 | 900;
export type TextSize = 10 | 12 | 14 | 18 | 22 | 28;
export type TextAlign = "center" | "left" | "right";
export type TextLine = 12;
export type TextColor = "blue" | "black" | "gray" | "white" | "error";
export type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";

const sizeClasses: Record<TextSize, string> = {
  10: cls.size10,
  12: cls.size12,
  14: cls.size14,
  18: cls.size18,
  22: cls.size22,
  28: cls.size28,
};
const weightClasses: Record<TextWeight, string> = {
  200: cls.weight200,
  400: cls.weight400,
  500: cls.weight500,
  600: cls.weight600,
  700: cls.weight700,
  900: cls.weight900,
};

const alignClasess: Record<TextAlign, string> = {
  center: cls.center,
  left: cls.left,
  right: cls.right,
};

const LineClasses: Record<TextLine, string> = {
  12: cls.line12,
};

const colorClasses: Record<TextColor, string> = {
  blue: cls.blue,
  gray: cls.gray,
  black: cls.black,
  white: cls.white,
  error: cls.error,
};

interface TextProps {
  className?: string;
  children?: ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  align?: TextAlign;
  tag?: TextTag;
  line?: TextLine;
  clickable?: boolean;
}

export const Text: FC<TextProps> = (props) => {
  const {
    className,
    children,
    size = 14,
    weight = 400,
    align,
    color = "gray",
    tag = "h1",
    line = "",
    clickable = false,
  } = props;
  const classes = [
    size && sizeClasses[size],
    weight && weightClasses[weight],
    align && alignClasess[align],
    color && colorClasses[color],
    line && LineClasses[line],
    className,
  ];
  const { theme } = useContext(ThemeContext);

  const mods: Mods = {
    [cls.clickable]: clickable,
    [cls.dark]: theme === Theme.DARK,
  };
  const Tag = tag;
  return <Tag className={ClassNames(cls.text, mods, classes)}>{children}</Tag>;
};
