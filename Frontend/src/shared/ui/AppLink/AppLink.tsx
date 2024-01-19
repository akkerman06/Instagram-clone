import { ClassNames } from "@/shared/lib/classNames"
import { FC, ReactNode } from "react"
import { LinkProps, NavLink } from "react-router-dom"
import cls from './AppLink.module.scss'


type AppLinkProps = {
  className?: string
  children: ReactNode
} & LinkProps 


export const AppLink:FC<AppLinkProps> = (props) => {
  const {to , children , className,...rest} = props

  return (
    <NavLink to={to} className={ClassNames(cls.appLink , {} , [className])} {...rest}>{children}</NavLink>

  )
}
