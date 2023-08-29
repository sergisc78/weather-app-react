import React from 'react'
import { NavbarComponent } from './components/NavbarComponent'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeRoute } from './routes/HomeRoute'
import { ContactRoute } from './routes/ContactRoute'
import { AboutRoute } from './routes/AboutRoute'
import { LoginRoute } from './routes/LoginRoute'
import { SearchRoute } from './routes/SearchRoute'
import { RegisterRoute } from './routes/RegisterRoute'

import { AuthProvider} from './context/AuthContext.jsx'
import { ProtectedRoute } from './routes/ProtectedRoute'

export const App = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomeRoute></HomeRoute>}></Route>
          <Route path='/contact' element={<ContactRoute></ContactRoute>}></Route>
          <Route path='/about' element={<AboutRoute></AboutRoute>}></Route>
          <Route path='/login' element={<LoginRoute></LoginRoute>}></Route>
          <Route path='/search' element={<ProtectedRoute><SearchRoute></SearchRoute></ProtectedRoute>}></Route>
          <Route path='/register' element={<RegisterRoute></RegisterRoute>}></Route>
          <Route path='/*' element={<Navigate to="/" />}></Route>
        </Routes>
      </AuthProvider>


    </>
  )
}