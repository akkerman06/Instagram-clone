import { Icon } from '@/shared/ui/Icon/Icon'
import { Text } from '@/shared/ui/Text/Text'
import cls from './NavSearch.module.scss'
import React, { ChangeEvent, useState } from 'react'

export const NavSearch = () => {
  const [search , setSearch] = useState('')

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }
  return (
    <div className={cls.search}> 
      <input type='text' onChange={onChangeSearch}/>
      {!search &&
      <div className={cls.text}>
        <Icon type='Search'/>
        <Text color='gray' tag='span' weight={200} >Search</Text>
      </div> }

    </div>
  )
}
