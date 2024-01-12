import cls from './LangSwitch.module.scss'
import {useTranslation} from 'react-i18next'
export const LangSwitch = () => {
    const {i18n} = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }



  return (
    <div className={cls.lang} onClick={toggle}>
        {i18n.language}
    </div>
  )
}
