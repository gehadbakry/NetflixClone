import axios from "axios";
import { useState } from "react";
// import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { login } from "../../context/authContext/apiCalls";
// import { AuthContext } from "../../context/authContext/AuthContext";
import "./Login.scss";


const Login = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  // const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8800/api/auth/login", { email,password })
    .then((res)=>{
        res.data.isAdmin === true ? navigate("/main") :  navigate("/userMain")
    })
    .catch((e)=> console.log(e));
    // await login({ email, password }, dispatch).then(Navigate("/movies")).catch((e)=> console.log(e));
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix? <NavLink to="/register">Sign up now</NavLink>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login; 