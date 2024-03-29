import { FC } from 'react'
import cls from './Spinner.module.scss'
import { ClassNames } from '@/shared/lib/classNames'

type sizeType = 'm' | 's' | 'l'
type variantType = 'primary' | 'default'| 'gray' | 'white'

interface SpinnerProps {
  className?: string
  size?: sizeType
  variant?: variantType
}

export const Spinner:FC<SpinnerProps> = (props) => {
  const {className , size = 's', variant = 'primary'} = props

  const sizeClasses: Record<sizeType , string> = {
    l: cls.sizeL,
    m: cls.sizeM,
    s: cls.sizeS

  }
  const variantClasses: Record<variantType , string> = {
    default: cls.default,
    gray: cls.gray,
    primary: cls.primary,
    white: cls.white
  }
  const classes = [
    size && sizeClasses[size],
    variant && variantClasses[variant],
    className
  ]

  return (
    <div className={className}>
      <div className={ClassNames(cls.ldsEllipsis , {} , classes)}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
