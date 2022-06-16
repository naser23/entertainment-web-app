import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { app, db } from "../../firebase.config";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Logo from "../../components/Logo/Logo";
import "../LogIn/login.css";

function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user && userCredential.user.emailVerified) {
        toast.success("Signed In!");
        navigate("/");
      } else if (userCredential.user && !userCredential.user.emailVerified) {
        // need to make error messages when login or sign up fails.
        toast.error("Please verify your email.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Wrong info");
    }
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
            value={email}
            onChange={onChange}
            id="email"
            placeholder="Email Address"
          />
          <input
            className="input"
            type="password"
            value={password}
            onChange={onChange}
            id="password"
            placeholder="Password"
          />

          <button className="finishLogIn">Login to your account</button>

          <p className="signUpOffer">
            Don't have an account?
            <Link className="signUpLink" to="/sign-up">
              Sign up
            </Link>
          </p>
          <p className="homePageButton">
            <Link className="backToHomePage" to="/">
              Back to homepage
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}

export default LogIn;
