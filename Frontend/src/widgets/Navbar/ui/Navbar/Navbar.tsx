import { NavMenu } from "../NavMenu/NavMenu"
import { NavSearch } from "../NavSearch/NavSearch"
import cls from './Navbar.module.scss'
import Logo from '@/shared/assets/Logo.png'
import { useContext } from "react"
import { ThemeContext } from "@/app/provider/ThemeProvider/ui/ThemeProvider"
import { Theme } from "@/shared/consts/Theme"
export const Navbar = () => {
  const {theme , setTheme} = useContext(ThemeContext)

  console.log(theme)
  return (
    <div className={cls.navbar}>
        <div className="container">
            <div className={cls.wrap}>
              <img className={theme === Theme.DARK && cls.dark} src={Logo}></img>
                <NavSearch />
                <NavMenu />
            </div>
        </div>
    </div>
  )
}
