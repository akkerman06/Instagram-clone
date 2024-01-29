import { ClassNames } from "@/shared/lib/classNames"
import { Dropdown, Space, type DropDownProps , type MenuProps } from "antd"
import { FC, ReactNode } from "react"

interface CustomDropDownProps extends DropDownProps {
    items: MenuProps['items']
    children: ReactNode
    className?: string
    onClick?: (value?: any) => void
}

export const DropDown: FC<CustomDropDownProps> = (props) => {
    const {items , children , className , onClick , ...rest} = props
  return (
    <Dropdown  menu={{ items , onClick }} trigger={['click']} className={ClassNames('dropdown', {} , [])}
    {...rest}
    >
        <a href="" onClick={(e) => e.preventDefault()}>
            {children}
        </a>
  </Dropdown>
  )
}
