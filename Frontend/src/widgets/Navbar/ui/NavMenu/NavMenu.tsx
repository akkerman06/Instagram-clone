import { INavMenuItem,  } from '../../model/consts/NavMenu'
import { Icon } from '@/shared/ui/Icon/Icon'
import cls from './NavMenu.module.scss'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { useContext } from 'react'
import { ThemeContext } from '@/app/provider/ThemeProvider/ui/ThemeProvider'
import { Theme } from '@/shared/consts/Theme'
import { SwitchButton } from '@/features'
import { ClassNames } from '@/shared/lib/classNames'
import { Link } from 'react-router-dom'
import { LangSwitch } from '@/widgets/LangSwitch/ui/LangSwitch'

export const NavMenu = () => {

  const {theme} = useContext(ThemeContext)

  const navMenuItems: INavMenuItem[] = [
    {
      href: '/',
      iconType: 'Home'
    },
    {
      href: '/login',
      iconType: 'Messenger'
    },
    {
      iconType: 'NewPosts'
    },
    {
      href: '/register',
      iconType: 'FindPeople'
    },
    {
      href: '/',
      iconType: 'Favorite'
    },
  ]
  return (
    <nav className={cls.nav}>
      <ul className={cls.list}>
        {
          navMenuItems.map((item) => (
            <li key={item.iconType} className={ClassNames(cls.item ,{[cls.dark] : theme === Theme.DARK}, [])}>
              {
                item.href ? <Link to={item.href} className={cls.link}>
                  <Icon  type={item.iconType} />
                </Link>
                 : 
                <Icon  type={item.iconType} />
              }
            </li>
          ))
        }
        <li className={theme === Theme.DARK && cls.dark}>
          <SwitchButton />
        </li>

        <li>
          <LangSwitch />
        </li>

        <li>
          <Avatar src='https://avatars.mds.yandex.net/i?id=5fb289413136914e59af9a5abef761e9241c95c2-10735006-images-thumbs&n=13' size={32}></Avatar>
        </li>
      </ul>

      
    </nav>
  )
}
