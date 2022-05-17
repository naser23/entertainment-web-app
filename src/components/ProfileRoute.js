import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Loading from "./Loading";

function ProfileRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    console.log("Checking for user");
    return <Loading />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/log-in" />;
}

export default ProfileRoute;
