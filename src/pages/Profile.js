import React from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const { loggedIn, checkingStatus } = useAuthStatus();

  function onClick() {
    auth.signOut();
    navigate("/");
  }

  return (
    <>
      <h1 className="header">Hello {user.displayName}</h1>
      <button className="finishLogIn" onClick={onClick}>
        Log Out
      </button>
    </>
  );
}

export default Profile;
