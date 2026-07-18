import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error, "error fetching tweets");
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const localUser = JSON.parse(localStorage.getItem("user"));
        if (localUser) {
          const res = await axios.get(
            `http://localhost:3000/users/${localUser.userId}`,
          );
          setUser(res.data);
        }
      } catch (error) {
        console.log(error, "error fetching tweets");
      }
    };
    fetchUser();
  }, []);

  const EditUserProfile = async (
    userId,
    name,
    bio,
    location,
    website,
    dob,
    profilePic,
    bannerPic,
  ) => {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("location", location);
    formData.append("website", website);
    formData.append("dob", dob);

    if (profilePic) formData.append("profilePic", profilePic);
    if (bannerPic) formData.append("bannerPic", bannerPic);

    try {
      const { data } = await axios.put(
        `http://localhost:3000/users/${user._id}`,
        formData,
        { headers: { "Content-Type": "multipart/formdata" } },
      );
      setUser(data);
    } catch (error) {
      console.error("EditUserProfile error", error);
    }
  };
  const Signup = async (email, name, userId, password, birthday) => {
    if (!email.trim() || !name || !userId || !password || !birthday) return;
    try {
      // console.log(Description,PostImagePreview);
      const response = await axios.post(`http://localhost:3000/users/`, {
        email: email,
        name: name,
        userId: userId,
        token: password,
        dob: birthday,
      });
      // console.log(response.data.newUser.token);
      // console.log(response.data.newUser.userId);
      setUser(response.data.newUser);
      localStorage.setItem("user", JSON.stringify(response.data.newUser));
    } catch (error) {
      console.log(error, "error Signup");
    }
  };

  const Login = async (userid, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    try {
      const stored = await axios.get(`http://localhost:3000/users/${userid}`);
      console.log(stored.data);

      const isEmail = emailRegex.test(userid);
      const match = isEmail
        ? stored.data.mail === userid
        : stored.data.userId === userid;
      if (match && stored.data.token === password) {
        const updated = { ...stored.data, token: password };
        localStorage.setItem("user", JSON.stringify(updated));
        setUser(updated);
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log(error, "error fetching tweets");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser({});
  };

  return (
    <UserContext.Provider
      value={{ users, user, Login, logout, Signup, EditUserProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
