import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

function LogIn() {
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="logIn">
      <header>
        <Logo />
      </header>

      <main className="logInWindow">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <input
            className="input"
            type="text"
            id="email"
            placeholder="Email Address"
          />
          <input
            className="input"
            type="text"
            id="password"
            placeholder="Password"
          />

          <button className="finishLogIn">Login to your account</button>

          <p className="signUpOffer">
            Don't have an account?
            <Link className="signUpLink" to="/sign-up">
              {" "}
              Sign up
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}

export default LogIn;
