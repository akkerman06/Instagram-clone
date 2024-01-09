import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cls from './Button.module.scss'
import { ClassNames, Mods } from '@/shared/lib/classNames'
type ButtonVariant = 'default' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    addonLeft?: JSX.Element,
    addonRight?: JSX.Element,
    variant?: ButtonVariant,
    max?: boolean,
    children: ReactNode,

}

export const Button:FC<ButtonProps> = (props) => {
  const {
    className = '' ,
    loading ,
    disabled ,
    variant = 'default' ,
    children,
    addonLeft,
    addonRight,
    max = false,

  } = props

    const variantClasses: Record<ButtonVariant, string> = {
        default: cls.default,
        outline: cls.outline
    }
    const classes = [
      variant && variantClasses[variant],
      className
    ]

    const mods: Mods = {
      [cls.disabled]: disabled,
      [cls.max]: max
    }

  return (
    <button   className={ClassNames(cls.btn , mods , classes)}>
        {addonLeft}
        {loading ? <div>Spinner...</div> : children}
        {addonRight}
    </button>
  )
}
