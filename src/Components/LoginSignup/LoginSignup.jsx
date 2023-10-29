
import React from 'react';
import "./LoginSignup.css";

import user_icon from './Assets/person.png';
import password_icon from './Assets/password.png';
import email_icon from './Assets/email.png';

function LoginSignup() {
  const [action, setAction] = React.useState("Login");

  return (
    <div className='container'>
      <div className="header">
        {/* Added fun animation for the logo */}
        <div className="logo" onClick={() => setAction("Login")}>
          <img src={user_icon} alt="" />
        </div>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      <div>
        {action === "Login" ? null : (
          <div className="forgot-password">
            {/* Made password forgot link clickable and added hover effect */}
            Lost Password <span onClick={() => alert('Password recovery clicked!')}>Click Here!</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={`submit ${action === "Login" ? "gray" : ""}`}
            onClick={() => {
              setAction("SignUp");
            }}
          >
            Sign Up
          </div>
          <div
            className={`submit ${action === "SignUp" ? "gray" : ""}`}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
