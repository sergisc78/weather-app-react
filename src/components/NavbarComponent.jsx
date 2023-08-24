import React from 'react'
import UserImage from '../assets/img/user.png'
import { NavLink } from 'react-router-dom'


export const NavbarComponent = () => {
  return (

    <header>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="nav-link active" to={'/'}>Weather Search App</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={'/about'}>About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/contact'}>ContactUs</NavLink>
              </li>
            </ul>


            <NavLink className="nav-link user-icon" to={'/login'}> <img src={UserImage} alt="userImage" height={30} width={30} /></NavLink>


          </div>
        </div>
      </nav>
    </header>



  )
}
