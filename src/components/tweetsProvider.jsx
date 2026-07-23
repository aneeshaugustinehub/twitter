import axios from "axios";
import { tweetsContext } from "./tweetsContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL + "tweets/";

export const TweetsProvider = ({ children }) => {
  const { user } = useUser();
  // const [tweetsByUser, setTweetsByUser] = useState();
  // const [Description, setDescription] = useState("");
  // const [PostImage, setPostImage] = useState();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: TweetItems = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tweets"],
    queryFn: async () => {
      const res = await axios.get(BASE_URL);
      return res.data.tweets;
    },
  });
  const { username } = useParams();
    const {
    data: tweetsByUser = [],
    isLoading: isTweetsByUserLoading,
    error: tweetsByUserError,
  } = useQuery({
    queryKey: ["tweetsByUser", username],
    queryFn: async () => {
      const res = await axios.get(BASE_URL + "user/" + username);
      return res.data.tweets;
    },
    enabled: !!username,
  });
  // console.log(tweetsByUser("gamingsprrow")
  // );

  const CreateTweet = async (Description, PostImage) => {
    if (!Description.trim() && !PostImage) return;
    try {
      const formData = new FormData();
      // formData.append("postedBy", user.userId);
      formData.append("Description", Description);
      formData.append("tweetImage", PostImage);
      // console.log(formData, "formData");
      await axios.post(BASE_URL + user.userId, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      return error;
    }
  };

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(BASE_URL + id);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["tweets"] });
    },
  });
  return (
    <tweetsContext.Provider
      value={{
        CreateTweet,
        TweetItems,
        tweetsByUser,
        isTweetsByUserLoading,
        tweetsByUserError,
        deleteMutation,
        isLoading,
        error,
      }}
    >
      {children}
    </tweetsContext.Provider>
  );
};
