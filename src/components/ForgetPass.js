import React from 'react'
import './style.css'
const ForgetPass = () => {
  return (
    <div>
        <nav className="nav-bar-forget">
          <h1 className="chatsmit-head-forget">chatsmith_</h1>
        </nav>

        <main className="main-box-forget">

          <div className="container-forget">
            <h2 className="forget-forget">Forget</h2>
            <h2 className="pass-pass">Password ?</h2>

            <div className="forget-box">
              <h2>Enter your email address</h2>
              <input type="email" className="input-forget"/>
              <div className="forget-underline"></div>
            </div>

            <div className="button-forget">
              <button className="btn-send-forget">SEND LINK</button>
            </div>


          </div>
        </main>

    </div>
  )
}

export default ForgetPass
