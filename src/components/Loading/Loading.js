import React from "react";
import SonicLoading from "../../assets/sonicLoading.gif";
import { useNavigate } from "react-router-dom";
import { getAuth, sendEmailVerification } from "firebase/auth";
import "../Loading/loading.css";

function Loading() {
  const auth = getAuth();
  const navigate = useNavigate();

  function onClick() {
    sendEmailVerification(auth.currentUser);
    console.log("resent verification email!");

    let interval = setInterval(async () => {
      // this function will keep being called until user.emailVerified is true.
      if (auth.currentUser.emailVerified) {
        // this will clear the interval and the funciton will stop being called.
        clearInterval(interval);
        navigate("/");
      }
      await auth.currentUser.reload();
    }, 1000);
  }

  return (
    <div className="loadingContainer">
      <img
        className="loadingSonic"
        src={SonicLoading}
        alt="Sonic loading gif"
      />
      <h1 className="loadingHeader">
        A verification link has been sent to your email. Please verify your
        email so you can log on!
      </h1>
      <div className="resendTextArea">
        <p>Didnt get the email? Click here:</p>
        <button onClick={onClick} className="resendVerificationEmail">
          Resend Verification Email
        </button>
      </div>
    </div>
  );
}

export default Loading;
