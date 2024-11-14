import React from 'react'
import './CSS/loginsignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='email Address'/>
          <input type="password" placeholder='Password'/>
          <button>Continue</button>
          <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing I agree to the terms of Use and privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
