import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const handleLogin = () =>{
  localStorage.setItem('userLogin', true);
  dispatch({
    type: "ISLOGIN",
    payload: true, 
  });
  navigate("/dashboard");
 }
  return (
    <>
      <div className="loginPage">
        <div className="login-container">
          <div className="left-container">
            <div className="left-container__content">
              <h1>Ahmednagar <span className="text-success"> Municipal</span> Corporation</h1>
              <p>Your gateway to municipal services.</p>
            </div>
          </div>
          <div className="right-container">
            <div className="right-container__box">
              <h2 className="right-container__h2">Welcome!</h2>
              <p className="right-container__p">
              Ahmednagar Municipal Log in.
              </p>
              <div className="input-container">
                <label htmlFor="email" className="right-container__label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="right-container__input"
                  name="email"
                  placeholder="Your email address"
                />
                <label htmlFor="password" className="right-container__label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="right-container__input"
                  name="password"
                  placeholder="Your password"
                />
              </div>
              <div className="toggle-container">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="toggle-box"
                  name="checkbox"
                />
                <label htmlFor="checkbox">Remember me</label>
              </div>
              <Button type="btn-success" buttonName="Login" onClick={()=> handleLogin()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
