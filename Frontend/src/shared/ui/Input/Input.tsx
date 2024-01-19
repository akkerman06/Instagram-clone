import  { Children, FC, InputHTMLAttributes, forwardRef } from 'react'
import cls from './Input.module.scss'
import { ClassNames, Mods } from '@/shared/lib/classNames'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    error?: string,
    value: string
}

export const Input:FC<InputProps> = forwardRef((props , ref: any) => {
    const { className , value = '' , error , placeholder ,  ...rest } = props

    const mods: Mods = {
      [cls.active]: value,
      [cls.errorField]: error
    }
  return (
    <div className={ClassNames(cls.field , mods , [className])}>
      <div className={cls.label}>
          <input ref = {ref} value={value} {...rest}></input>

          {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
      </div>

      <span className={ClassNames(cls.error , {[cls.errorActive]: error} , [])}>{error}</span>
    </div>        
  )
})
