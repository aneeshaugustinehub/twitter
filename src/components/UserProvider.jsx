import { UserContext } from "./UserContext";
import axios from "axios";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

export const UserProvider = ({ children }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const USER_URL = BASE_URL + "users/";
  const USER_ID_URL = BASE_URL + "users/id/";

  const {
    data: users,
    isLoading: usersIsLoading,
    error: usersError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(USER_URL);
      return res.data;
    },
  });

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await axios.get(USER_URL);
  //       setUsers(res.data);
  //     } catch (error) {
  //       console.log(error, "error fetching fetchUsers");
  //     }
  //   };
  //   fetchUsers();
  // }, [USER_URL]);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const localUser = JSON.parse(localStorage.getItem("user"));
  //       if (localUser) {
  //         const res = await axios.get(USER_URL + localUser.userId);
  //         setUser(res.data);
  //       }
  //     } catch (error) {
  //       console.log(error, "error fetching fetchUser");
  //     }
  //   };
  //   fetchUser();
  // }, [USER_URL]);

  const localUser = JSON.parse(localStorage.getItem("user"));
  const {
    data: user,
    isLoading: userIsLoading,
    error: userError,
  } = useQuery({
    queryKey: ["user", localUser],
    queryFn: async () => {
      const res = await axios.get(USER_URL + localUser.userId);
      return res.data;
    },
  });

  // const GetUserById = async (id) => {
  //   try {
  //     if (id) {
  //       const res = await axios.get(USER_ID_URL + id);
  //       return (res.data);
  //     }
  //   } catch (error) {
  //     console.log(error, "error fetching fetchUser");
  //   }
  // };
  const GetUserByUsername = (username) => {
    return useQuery({
      queryKey: ["userByUsername", username],
      queryFn: async () => {
        const res = await axios.get(USER_URL + username);
        return res.data;
      },
    });
  };

  const GetUserById = (id) => {
    return useQuery({
      queryKey: ["GetUserById", id],
      queryFn: async () => {
        const res = await axios.get(USER_ID_URL + id);
        return res.data;
      },
    });
  };

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
      await axios.put(USER_URL + user._id, formData, {
        headers: { "Content-Type": "multipart/formdata" },
      });
    } catch (error) {
      console.error("EditUserProfile error", error);
    }
  };

  const Signup = async (email, name, userId, password, birthday) => {
    if (!email.trim() || !name || !userId || !password || !birthday) return;
    try {
      // console.log(Description,PostImagePreview);
      const response = await axios.post(USER_URL, {
        email: email,
        name: name,
        userId: userId,
        token: password,
        dob: birthday,
      });
      localStorage.setItem("user", JSON.stringify(response.data.newUser));
    } catch (error) {
      console.log(error, "error Signup");
    }
  };

  const Login = async (userid, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    try {
      const stored = await axios.get(USER_URL + userid);
      // console.log(stored.data);

      const isEmail = emailRegex.test(userid);
      const match = isEmail
        ? stored.data.mail === userid
        : stored.data.userId === userid;
      if (match && stored.data.token === password) {
        const updated = { ...stored.data, token: password };
        localStorage.setItem("user", JSON.stringify(updated));
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log(error, "error fetching tweets");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  //   const { mutate: CreateTweet } = useMutation({
  //   mutationFn: async ({ Description, tweetImage }) => {
  //     const formData = new FormData();
  //     formData.append("Description", Description);
  //     formData.append("tweetImage", tweetImage);
  //     await axios.post(TWEET_URL + user._id, formData);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["tweets"],
  //     });
  //   },
  // });

  const { mutate: AddBookmark } = useMutation({
    mutationFn: async ({ userId, tweetId }) => {
      await axios.put(USER_URL + "bookmark/" + userId,{tweetId});
    },
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["bookmark"],
      });
    },
  });

  return (
    <UserContext.Provider
      value={{
        users,
        usersError,
        usersIsLoading,
        user,
        userError,
        userIsLoading,
        Login,
        logout,
        Signup,
        AddBookmark,
        EditUserProfile,
        GetUserById,
        GetUserByUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
