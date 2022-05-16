import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

function ProfileRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    console.log("Checking for user");
    return <h1 className="header">Loading...</h1>;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/log-in" />;
}

export default ProfileRoute;
