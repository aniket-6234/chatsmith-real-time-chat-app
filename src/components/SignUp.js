import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;



const Signup = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  }


  const { signUp } = useUserAuth();
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        await signUp(email, password);
        setError("");
        setSuccess("Account successfully created, Please verify your email.");
        // navigate("/");
      }
      catch(err) {
         setError(err.message);
      }
  }


  return (
    <div className="login-page">
        <nav className="nav-bar">
          <h1 className="chatsmit-head">chatsmith_</h1>
        </nav>

        <main className="main-box">

          <div className="form">

            <h2 className="sign-head">Create your free account</h2>
            <div className="new-sign-up">
              <h2 className="new">Already have an account ?</h2>
              <Link to="/" style={{textDecoration:"none"}}>
                 <h2 className="signup">Sign in</h2>
              </Link>
            </div>

          <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="block-box">

                  <button className="btn-google">
                    <img  className="google-logo"src="./images/google-icon.svg" alt="google" />
                    <h2 className="text-google">CONTINUE WITH GOOGLE</h2>
                  </button>

                  {error && <div className="error-msg">
                    <p>{error}</p>
                  </div>}

                  {success && <div className="success-msg">
                    <p>{success}</p>
                  </div>}
                  

                  <div className="input">

                     <h2 className="email-address-signup">Email Address</h2>
                     <div>
                       <input 
                          className="input-email" 
                          placeholder="Enter Email" 
                          type="text" 
                          name="email" 
                          onChange={ e => setEmail(e.target.value)}
                        />
                     </div>

                     <h2 className="password-signup">Password</h2>

                     <div className="password-toggle-box">
                       <input className="input-password" 
                       placeholder="Enter Password" 
                       type={passwordShown ? "text" : "password"} 
                       name="password"
                       onChange={ e => setPassword(e.target.value)} 
                       />
                       <span>
                        <i onClick={togglePasswordVisiblity}>{eye}</i>
                       </span>
                     </div>

                     <div>
                       <button className="btn-login">SIGN UP</button>
                     </div>
                  </div>
                </div>
            </div>
            </form>

            <div className="footer-signup">
               <h1><a id="github-link" href="https://github.com/aniket-6234/chatsmith-real-time-chat-app" target="_blank">GitHub Link</a></h1>
            </div>

          </div>
        </main>
    </div>

  )
}

export default Signup
