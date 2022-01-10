
import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  //useRef to send data and were using useReft over useState to prevent constant rerendering 
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext)

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };


  console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facetagram</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facetagram.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input 
            placeholder="Email" 
            type="email" 
            autoComplete="on"
            required 
            className="loginInput"
             ref={email}
             />
            <input 
            placeholder="Password" 
            type="password" 
            autoComplete="on"
            required 
            className="loginInput"
            minLength="6"
             ref={password}
             />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}