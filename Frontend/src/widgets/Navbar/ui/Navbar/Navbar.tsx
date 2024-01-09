import { Icon } from "@/shared/ui/Icon/Icon"
import { NavMenu } from "../NavMenu/NavMenu"
import { NavSearch } from "../NavSearch/NavSearch"
import cls from './Navbar.module.scss'
import Logo from '@/shared/assets/Logo.png'
import { Button } from "@/shared/ui"
export const Navbar = () => {
  return (
    <div className={cls.navbar}>
        <div className="container">
            <div className={cls.wrap}>
              <img src={Logo}></img>
                <NavSearch />
                <NavMenu />
                <Icon type={"Home"}></Icon>
                <Button>fgfgdg</Button>
            </div>
        </div>
    </div>
  )
}
