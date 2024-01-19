import { NavMenu } from "../NavMenu/NavMenu"
import { NavSearch } from "../NavSearch/NavSearch"
import cls from './Navbar.module.scss'
import { LogoSvg } from "@/shared/ui/Logo/Logo"

export const Navbar = () => {

  return (
    <div className={cls.navbar}>
        <div className="container">
            <div className={cls.wrap}>
              <LogoSvg />
                <NavSearch />
                <NavMenu />
            </div>
        </div>
    </div>
  )
}
