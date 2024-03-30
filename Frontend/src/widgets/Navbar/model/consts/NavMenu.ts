import { IconType } from "@/shared/ui/Icon/IconName";

export interface INavMenuItem {
  href?: string;
  iconType: IconType;
  onClick?: (value?: any) => void;
}
