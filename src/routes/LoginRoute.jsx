import React, { useState } from 'react'

export const LoginRoute = () => {

  const [user, setUser] = useState({ email: "", password: "" })

  return (
    <div>Login

      <form action="">
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
      </form>





    </div>
  )
}
