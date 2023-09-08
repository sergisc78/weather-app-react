import React from 'react'
import { NavbarComponent } from './components/NavbarComponent'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeRoute } from './routes/HomeRoute'
import { SearchRoute } from './routes/SearchRoute'


import { AuthProvider} from './context/AuthContext.jsx'


export const App = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomeRoute></HomeRoute>}></Route>
          <Route path='/search' element={<SearchRoute></SearchRoute>}></Route>
          <Route path='/*' element={<Navigate to="/" />}></Route>
        </Routes>
      </AuthProvider>


    </>
  )
}