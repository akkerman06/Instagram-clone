import {  useContext } from 'react'
import cls from './Logo.module.scss'
import Logo from '@/shared/assets/Logo.png'
import { ThemeContext } from '@/app/provider/ThemeProvider/ui/ThemeProvider'
import { Theme } from '@/shared/consts/Theme'



export const LogoSvg= () => {
    const {theme} = useContext(ThemeContext)
  return (
        <img className={Theme.DARK === theme && cls.dark} src={Logo} alt="" />
  )
}
