import React from 'react'
import UserImage from '../assets/img/user.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'





export const NavbarComponent = () => {

  
 
  return (

    <header>
      
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="nav-link active" to={'/'}>Weather Search App</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
        </div>
      </nav>
    </header>



  )
}
