import React from 'react'
import "./Login.css"
export const Login = () => {
  return (
    <div className='loginsingnup'> 
    <div className="loginsignup-container">
      <h1>Sign up</h1>
      <div className="loginsignup-fields">
        <input type="text"  placeholder='Your Name'/>
        <input type="email" placeholder='Email Address'/>
        <input type="password" placeholder='Password' />
      </div>
      <button>Continue</button>
     <div className="loginsignup-login">Already have an account? <span>Login here</span></div>
     <div className="loginsignup-agree">
      <input type="checkbox" name="" id=""/>
      <p>By continuing ,i agree to the terms of use & privacy policy.</p>
     </div>
    </div>
    </div>
  )
}
