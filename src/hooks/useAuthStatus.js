import React from "react";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // make sure there is a user and their email is verified.
      if (user && user.emailVerified) {
        setLoggedIn(true);
      } else {
        // if user isn't loggedIn or logs out
        setLoggedIn(false);
      }
      setCheckingStatus(false);
    });
  });

  return { loggedIn, setLoggedIn, checkingStatus };
}
