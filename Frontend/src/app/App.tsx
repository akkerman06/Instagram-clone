import { Navbar } from '../widgets'
import { Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/HomePage/ui/HomePage'
import { LoginLazyPage } from '@/pages/LoginPage/ui/LoginLazyPage'
import { RegisterLazyPage } from '@/pages/RegisterPage/ui/RegisterLazyPage'
import { Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Spinner } from '@/shared/ui'
import { useSelector } from 'react-redux'
import { getAuthData, getAuthToken } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { getFetchAuthUser } from '@/entities/User/model/service/getFetchAuthUser'
import { LOCAL_STORAGE_TOKEN } from '@/shared/consts/LocalStorage'
import { RouteProvider } from './provider'


const App = () => {
  const isLogged = useSelector(getAuthToken)
  const dispatch = useAppDispatch()
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN)

  useEffect(() => {
    if(token){
      dispatch(getFetchAuthUser())
    }
  } , [dispatch])


  return (
    <div className='app'>
      <Suspense fallback =''>
      {isLogged && <Navbar/>}

        <div className='container'>
          <RouteProvider/>
        </div>
      </Suspense>
    </div>
  )
}

export default App