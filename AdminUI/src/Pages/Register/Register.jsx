import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.scss";
// import { useRef } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailDone, setEmailDone] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const usernameRef = useRef();

  const changeEmail = (n)=>{
    setEmail(n.target.value);
  }
  
  const changeUsername = (n)=>{
    setUsername(n.target.value);
  }
  
  const changePassword = (n)=>{
    setPassword(n.target.value);
  }

  const handleStart = () => {
    // setEmail(emailRef.current.value);
    setEmailDone(true);
    console.log(email);
  };
  const handleFinish = async (e) => {
    // e.preventDefault();
    // console.log(passwordRef.current.value);
    // setPassword(passwordRef.current.value);
    // console.log(password);

    // console.log(usernameRef.current.value);
    // setUsername(usernameRef.current.value);
    // console.log(username);
    try {
        console.log(username, password, email);
        await axios.post("http://localhost:8800/api/auth/register", { email, username, password })
        .then(navigate("/login"));
        // navigate("/login");
    } catch (err) {}
  };

  useEffect(()=>{
    // console.log("inside ", username, email, password);
  }, [email, password, username]);
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          
          <button className="loginButton"> <NavLink to="/login"> Sign In </NavLink></button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!emailDone ? (
          <div className="input">
            <input type="email" placeholder="email address" onChange={changeEmail} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" onChange={changeUsername} />
            <input type="password" placeholder="password" onChange={changePassword} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
