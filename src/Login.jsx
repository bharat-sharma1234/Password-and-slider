import React from 'react'
import './Login.css'

function Login() {
  return (
    <>
      <div class="login-form">
        <h2>Login</h2>
        <div class="form">
          <div class="field">
            <label>Username</label>
            <input type="email" required spellcheck="false" />
          </div>
          <div class="field">
            <label>Password</label>
            <input type="text" required spellcheck="false" />
          </div>
          <button>Submit</button>
        </div> </div>

    </>
  )
}

export default Login
