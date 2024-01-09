import {type FC } from "react"
import { IconType, iconName } from "./IconName"
import cls from './Icon.module.scss'


interface IconProps {
    type: IconType,
    className?: string
}

export const Icon:FC<IconProps> = ({type , className = ''}) => {
  return (
    <div className={cls.icon}>
        {iconName[type]}
    </div>
  )
}
