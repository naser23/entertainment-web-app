import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

function SignUp() {
  return (
    <div className="signUp">
      <header>
        <Logo />
      </header>

      <main className="signUpWindow">
        <h1>Sign Up</h1>
        <form>
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
          <input
            className="input"
            type="text"
            id="repeat-password"
            placeholder="Repeat-Password"
          />

          <button className="finishSignUp">Create an account</button>

          <div className="signInOfferContainer">
            <p className="signInOffer">Already have an Account?</p>
            <Link className="signInLink" to="/log-in">
              Login
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
