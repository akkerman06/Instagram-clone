import { getAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { profileActions } from '../../model/slice/profileSlice'
import { getProfileUser } from '../../model/selectors/getProfileUser'
import { HStack, Spinner, Text, VStack } from '@/shared/ui'
import { Avatar, Button } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'
import cls from './ProfileInfo.module.scss'
import { useProfile } from '../../model/consts/useProfile'
import { DropDown } from '@/shared/ui/Popups/DropDown/DropDown'
import { User } from '@/entities/User/model/types/user'
import { getProfileUserLoading } from '../../model/selectors/getProfileUserLoading'

interface ProfileInfoProps {
  id: string
  users: User[]
}

export const ProfileInfo:FC<ProfileInfoProps> = ({id , users}) => {
  const authData = useSelector(getAuthData)
  const profileLoading = useSelector(getProfileUserLoading)
  const dispatch = useAppDispatch()
  const user = useSelector(getProfileUser)
  const dropDownDotsItems = useProfile(authData._id === id)


  useEffect(() => {
    if(authData._id === id){
      dispatch(profileActions.setProfileUser(authData))
    }
    else {
      const newUser = users.find((item) => item._id === id)

      if(newUser) dispatch(profileActions.setProfileUser(newUser))
    }
  }, [id , authData , users])

  if(profileLoading) {
    return <HStack justify='center'>
      <Spinner size='m'/>
    </HStack>
  }


  return (
    <HStack max className={cls.profileInfo}>
      {
        user && (
        <HStack className={cls.profileInfo} gap={40}>
          <Avatar size={150} src = {user?.avatar}/>

          <VStack gap={32}>
            <HStack align='center' gap={28}>
              <Text>@{user.username}</Text>

              {
                authData._id === id ?  <Button type='default'>Изменить</Button> : <Button type='primary'>Подписаться</Button>
              }


              <DropDown items={dropDownDotsItems}>
                <EllipsisOutlined style={{fontSize: 35}} />
              </DropDown>
            </HStack>

            <HStack gap={18} max={false}>
              <HStack gap={8} >
                <Text weight={700} color='black' size={14}>1.258</Text>
                <Text>posts</Text>
              </HStack>

              <HStack gap={8} >
                <Text weight={700} color='black' size={14}>{user.followers.length}</Text>
                <Text>подписчики</Text>
              </HStack>

              <HStack gap={8} >
                <Text weight={700} color='black' size={14}>{user.following.length}</Text>
                <Text>подписки</Text>
              </HStack>
            </HStack>

            <VStack>
              <Text size={18}  weight={700}>
                {user.fullname}
              </Text>
              <Text size={18}  weight={700}>
                {user.mobile}
              </Text>
              <Text size={18}  weight={700}>
                {user.address}
              </Text>
              <Text size={18} weight={700}>
                <a href={user.website} target='_blank'>
                  {user.website}
                </a>
              </Text>                            
            </VStack>
          </VStack>
        </HStack>
        )
      }

    </HStack>
  )
}