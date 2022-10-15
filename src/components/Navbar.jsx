import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { AuthContext } from "../context/AuthContext";
export const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Lama chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="profile pic" />
        <span>{currentUser.displayName}</span>
        <p>name</p>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};
