import React from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn, checkingStatus } = useAuthStatus();

  function onClick() {
    auth.signOut();
    navigate("/");
  }

  return (
    <main className="profileContainer">
      <h1 className="header">Hello {user.displayName}</h1>
      <section className="userInfo">
        <h3 className="userInfoHeader">Personal info:</h3>
        <div className="userInfoText">
          <h4>{user.displayName}</h4>
          <h4>{user.email}</h4>
        </div>
      </section>
      <button className="logOut" onClick={onClick}>
        Log Out
      </button>
    </main>
  );
}

export default Profile;
