import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { app, db } from "../../firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Logo from "../../components/Logo/Logo";

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
      console.log(userCredential.user);

      if (userCredential.user) {
        console.log("Signed In!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      console.log("Wrong info");
    }
  }

  // function fuckingGetAuthNigga() {
  //   const auth = getAuth();
  //   console.log(auth);
  // }

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
