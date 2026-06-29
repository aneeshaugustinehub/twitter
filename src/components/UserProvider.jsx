import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : { user_id: "", token: "" };
  });

  const EditUserProfile = (user_id,fullname, bio, location, website, dob)=>{
    const stored = JSON.parse(localStorage.getItem("user")) || {};
    const data ={user_id,fullname, bio, location, website, dob}
    const update = {...stored, ...data }
    localStorage.setItem("user", JSON.stringify(update));
    setUser(update);

  }
  const Signup = (mail, fullname, user_id, token) => {
    const data = { mail, fullname, user_id, token, islogged: true };
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const Login = (userid, token) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const stored = JSON.parse(localStorage.getItem("user")) || {};

    const isEmail = emailRegex.test(userid);
    const match = isEmail
      ? stored.mail === userid
      : stored.user_id === userid;

    if (match && stored.token === token) {
      const updated = { ...stored, islogged: true };
      localStorage.setItem("user", JSON.stringify(updated));
      setUser(updated);
    } else {
      console.log("Invalid credentials");
    }
  };

  const logout = () => {
    const stored = JSON.parse(localStorage.getItem("user")) || {};
    const updated = { ...stored, islogged: false };
    localStorage.setItem("user", JSON.stringify(updated));
    setUser({ user_id: "", token: "" });
  };

  return (
    <UserContext.Provider value={{ user, Login, logout, Signup, EditUserProfile,}}>
      {children}
    </UserContext.Provider>
  );
};