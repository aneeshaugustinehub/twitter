import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : { username: "", token: "" };
  });

  const Signup = (mail, fullname, username, token) => {
    const data = { mail, fullname, username, token, islogged: true };
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const Login = (userid, token) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const stored = JSON.parse(localStorage.getItem("user")) || {};

    const isEmail = emailRegex.test(userid);
    const match = isEmail
      ? stored.mail === userid
      : stored.username === userid;

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
    setUser({ username: "", token: "" });
  };

  return (
    <UserContext.Provider value={{ user, Login, logout, Signup }}>
      {children}
    </UserContext.Provider>
  );
};