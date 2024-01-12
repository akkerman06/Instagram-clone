import { Navbar } from '../widgets'
import { Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/HomePage/ui/HomePage'
import { LoginLazyPage } from '@/pages/LoginPage/ui/LoginLazyPage'
import { RegisterLazyPage } from '@/pages/RegisterPage/ui/RegisterLazyPage'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'


const App = () => {
  return (
    <div className='app'>
      <Suspense fallback =''>
      <Navbar/>

        <div className='container'>
          <Suspense fallback={<h1>...Loading</h1>}>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/login' element={<LoginLazyPage/>} />
              <Route path='/register' element={<RegisterLazyPage/>} />
            </Routes>            
          </Suspense>

        </div>
      </Suspense>
    </div>
  )
}

export default App