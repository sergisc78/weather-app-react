import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { AlertComponent } from '../components/AlertComponent'


export const LoginRoute = () => {


  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState()


  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  }

  const handleSumit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await login(user.email, user.password)
      navigate('/search')
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Invalid email")
      } else if (error.code === "auth/user-not-found") {
        setError("User not found !")
      } else if (error.code === "auth/wrong-password") {
        setError("Wrong password !")
      }
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/search')
    } catch (error) {
      setError(error.message);
    }

  }

  return (
    <div>
      <h1>Login</h1>

      <div>

        {error && <AlertComponent message={error}/>}

        <form onSubmit={handleSumit}>

          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder='email@company.com' onChange={handleChange} />

          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' onChange={handleChange} />

          <button className='register'>Login</button>

        </form>

        <button onClick={handleGoogleLogin}>Google Login</button>
      </div>


    </div>
  )
}

