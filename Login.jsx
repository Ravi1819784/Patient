import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="main-login">
        <div className="main-form">
          <div className="login-form">
            <center>
              {" "}
              <h3>Login</h3>
            </center>
            <div className="input">
              <div className="input1"> <label htmlFor="username">username</label><br />
              <input type="text" /></div>
             <div className="input2">      <label htmlFor="password">password</label><br />
              <input type="text" /></div>
             <button className="btn">submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
