"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../lib/firebase";
import { loginSuccess } from "../features/auth/authSlice";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (user) {
          const token = await user.getIdToken();

          dispatch(
            loginSuccess({
              user: {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
              },
              token,
            })
          );
        } else {
          dispatch(logout());
        }
      }
    );

    return () => unsubscribe();
  }, [dispatch]);

  return children;
}