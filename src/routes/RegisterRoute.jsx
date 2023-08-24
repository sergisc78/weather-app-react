import React, { useState } from 'react'


export const RegisterRoute = () => {


  const [user, setUser] = useState({
    emaul: '',
    password: ''
  })


  const handleChange = ({target:{name,value}}) => {
    setUser({...user,[name]:value});
  }

  const handleSumit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSumit}>

        <label htmlFor="email">Email</label>
        <input type="email" name='email' placeholder='email@company.com' onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' onChange={handleChange} />

        <button className='register'>Register</button>

      </form>


    </div>
  )
}
