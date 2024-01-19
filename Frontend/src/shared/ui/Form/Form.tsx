import { ClassNames } from '@/shared/lib/classNames'
import React, { FC, FormHTMLAttributes, ReactNode } from 'react'
import cls from './Form.module.scss'
interface FromProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode
    className?: string
}

export const Form:FC<FromProps>  = ({children, className, ...rest}) => {
  return (

    <form className={ClassNames(cls.form , {} , [className])} {...rest}>
        {children}
    </form>
  )
}
