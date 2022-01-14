import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useUserAuth } from '../context/UserAuthContext';


const eye = <FontAwesomeIcon icon={faEye} />;


const Login = () => {

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();

  //Email and Password Sign in Method
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await logIn(email, password);
      navigate("/home");
    }
    catch(err) {
       setError(err.message);
    }
  }

  //Google Sign in Method
  const handleGoogleSignIn = async (e) => {
     e.preventDefault();
     try{
      await googleSignIn();
      navigate("/home");
     }catch(err) {
       console.error(err.message);
     }
  }


 


  return (
    <div className="login-page">
        <nav className="nav-bar">
          <h1 className="chatsmit-head">chatsmith_</h1>
        </nav>

        <main className="main-box">

          <div className="form">

            <h2 className="sign-head">Sign In to your account</h2>
            <div className="new-sign-up">
              <h2 className="new">New to chatsmith_ ?</h2>
              <Link to="/signup" style={{textDecoration:"none"}}>
                <h2 className="signup">Sign up</h2>
              </Link>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="block-box">

                  <button 
                   onClick={handleGoogleSignIn}
                   className="btn-google">
                    <img  className="google-logo"src="./images/google-icon.svg" alt="google" />
                    <h2 className="text-google">CONTINUE WITH GOOGLE</h2>
                  </button>

                  {error && <div className="error-msg">
                    <p>{error}</p>
                  </div>}

                  <div className="input">
                     <h2>Email Address</h2>
                     <div>
                       <input 
                          className="input-email" 
                          placeholder="Enter Email" 
                          type="text" 
                          name="email" 
                          onChange={e => setEmail(e.target.value)}
                        />
                     </div>

                     <h2 className="password">Password</h2>

                     <div className="password-toggle-box">
                       <input 
                         className="input-password" 
                         placeholder="Enter Password" 
                         type={passwordShown ? "text" : "password"} 
                         name="password"
                         onChange={e => setPassword(e.target.value)} 
                       />
                       <span>
                        <i onClick={togglePasswordVisiblity}>{eye}</i>
                       </span>
                     </div>

                     <div>
                       <button className="btn-login">SIGN IN</button>
                     </div>

                  </div>

                  <Link to='/forgetpassword' style={{textDecoration:"none"}}> 
                    <h2 className="forget-pass">Forget Password?</h2>
                  </Link>

                </div>
  
            </div>
            </form>

            <div className="footer">
                <h1><a id="github-link" href="https://github.com/aniket-6234/chatsmith-real-time-chat-app" target="_blank">GitHub Link</a></h1>
            </div>

          </div>
        </main>
    </div>
  )
}

export default Login
