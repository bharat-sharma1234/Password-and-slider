import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <>
      <div class="signup-form">
        <h2>Sign Up</h2>
        <div class="form">
      <div class="field">
  <label>Username</label>
    <input type="email" required spellcheck="false" />
  </div>
      <div class="field">
   <label>Password</label>
    <input type="text" required spellcheck="false" />
  </div>
      <button type="submit">Sign Up</button>
   </div>
  </div>
    </>
  )
}

export default Signup
