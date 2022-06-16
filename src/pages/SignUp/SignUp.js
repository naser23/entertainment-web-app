import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase.config";
import { setDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import "../SignUp/signup.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const navigate = useNavigate();

  const { name, email, password, repeatPassword } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      // getting user authentication object
      const auth = getAuth();
      // console.log(auth.currentUser.email);

      // checking if both passwords are the same before creating user
      if (repeatPassword === password) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;

        // updating the displayName with the name value
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        const formDataCopy = { ...formData };
        delete formDataCopy.password;
        delete formDataCopy.repeatPassword;

        formDataCopy.timestamp = serverTimestamp();

        // navigating to verify email page while we wait for user to verify email.
        navigate("/verify-email");

        await sendEmailVerification(auth.currentUser);

        let interval = setInterval(async () => {
          // this function will keep being called until user.emailVerified is true.
          if (user.emailVerified) {
            // this will clear the interval and the funciton will stop being called.
            clearInterval(interval);
            // adds user to the firestore doc
            await setDoc(doc(db, "users", user.uid), formDataCopy);
            toast.success("Email verified!");
            navigate("/");
          }
          await userCredential.user.reload();
        }, 1000);
      } else {
        toast.error("Passwords do not match");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong with registration");
    }
  }

  return (
    <div className="signUp">
      <header>
        <Logo />
      </header>

      <main className="signUpWindow">
        <h1>Sign Up</h1>
        <form onSubmit={onSubmit}>
          <input
            className="input"
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={onChange}
          />
          <input
            className="input"
            type="text"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="Email Address"
          />
          <input
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
          <input
            className="input"
            type="password"
            id="repeatPassword"
            placeholder="Repeat-Password"
            value={repeatPassword}
            onChange={onChange}
          />

          <button className="finishSignUp">Create an account</button>

          <div className="signInOfferContainer">
            <p className="signInOffer">Already have an Account?</p>
            <Link className="signInLink" to="/log-in">
              Login
            </Link>
          </div>
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

export default SignUp;
