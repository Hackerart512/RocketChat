import React, { useState } from 'react'
import './LoginSignup.css'
 

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");


  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <img src="/images/logo.png" alt="" />
          <input type="name" placeholder='Name' />
        </div>}

        <div className="input">
          <img src="/images/logo.png" alt="" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src="/images/logo.png" alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "Submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "Submit"} onClick={() => { setAction("Login") }}>Log In</div>
      </div>
    </div>
  )
}
