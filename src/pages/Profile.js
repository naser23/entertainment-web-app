import React from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();

  function onClick() {
    auth.signOut();
    navigate("/");
  }

  return (
    <>
      <h1 className="header">Hello User</h1>
      <button className="finishLogIn" onClick={onClick}>
        Log Out
      </button>
    </>
  );
}

export default Profile;
