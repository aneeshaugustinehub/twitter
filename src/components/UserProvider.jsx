import { useState,} from "react";
import {UserContext} from "./UserContext"

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(()=>{
    const saved = localStorage.getItem("userdata")
    return saved? JSON.parse(saved):{username:"",token: ""}
  });
  const Signup =(mail,fullname,username,token)=>{
    const data={mail,fullname,username,token}
    localStorage.setItem("userdata", JSON.stringify((data)));
    setUser(data)
  }
  const Login = (mailorid,token) => {
    const data={mailorid,token}
    localStorage.setItem("userdata", JSON.stringify((data)));
    setUser(data)
  };
  const logout=()=>{
    localStorage.removeItem("userdata")
    setUser({username:"",token:""})
  }
  return (
    <UserContext.Provider value={{ user, Login, logout ,Signup}}>
    {children}
    </UserContext.Provider>

  );
};
