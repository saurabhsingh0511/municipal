import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const resetError = () => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and Password are required.");
      resetError();
      return;
    }
    if (email === "admin@gmail.com" && password === "123456789") {
      localStorage.setItem("userLogin", true);
      dispatch({
        type: "ISLOGIN",
        payload: true,
      });
      navigate("/dashboard");
    } else {
      setError("Email or Password is incorrect. Please try again");
      resetError();
    }
  };

  return (
    <div className="loginPage">
      <div className="login-container">
        <div className="left-container">
          <div className="left-container__content">
            <h1>
              Ahmednagar <span className="text-success">Municipal</span>{" "}
              Corporation
            </h1>
            <p>Your gateway to municipal services.</p>
            <div className={`error-message ${error ? "show" : ""}`}>
              <i className="bi bi-exclamation-triangle-fill"></i> {error}
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-container__box">
            <h2 className="right-container__h2">Welcome!</h2>
            <p className="right-container__p">Ahmednagar Municipal Log in.</p>
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
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="right-container__label">
                Password
              </label>
              <div className="right-container__input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="right-container__input"
                  name="password"
                  placeholder="Your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`bi ${
                    showPassword ? "bi-eye-slash" : "bi-eye"
                  } eye-icon`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
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
            <Button
              type="btn-success"
              buttonName="Login"
              onClick={() => handleLogin()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
