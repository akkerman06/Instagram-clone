import { Navbar, PageLoader } from '../widgets'
import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {  getAuthToken } from '@/entities/User'
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
        <PageLoader/>
        <div className='container'>
          <RouteProvider/>
        </div>
      </Suspense>
    </div>
  )
}

export default App