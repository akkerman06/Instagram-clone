import React, { CSSProperties, FC } from "react";
import cls from "./Skeleton.module.scss";
import { ClassNames } from "@/shared/lib/classNames";
interface SkeletonProps {
  className?: string;
  width?: number | string;
  height?: number;
  radius?: number;
}
export const Skeleton: FC<SkeletonProps> = ({
  className = "",
  width,
  height,
  radius,
}) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: radius,
  };
  return (
    <div className={ClassNames(cls.skeleton, {}, [className])} style={styles} />
  );
};
