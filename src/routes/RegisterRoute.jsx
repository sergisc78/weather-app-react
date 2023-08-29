import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { AlertComponent } from '../components/AlertComponent'



export const RegisterRoute = () => {


  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { singup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState()


  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  }

  const handleSumit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await singup(user.email, user.password)
      navigate('/search')
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Invalid email")
      } else if (error.code === "auth/weak-password") {
        setError("Password too weak, at least 6 characters")
      } else if (error.code === "auth/email-already-exists") {
        setError("User exists !!")
      }
    }
  }

  return (
    <div>
      <h1>Register</h1>

      <div>

      {error && <AlertComponent message={error}/>}

        <form onSubmit={handleSumit}>

          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder='email@company.com' onChange={handleChange} />

          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' onChange={handleChange} />

          <button className='register'>Register</button>

        </form>
      </div>


    </div>
  )
}

