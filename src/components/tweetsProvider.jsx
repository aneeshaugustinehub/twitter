import axios from "axios";
import { tweetsContext } from "./tweetsContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

const BASE_URL = "http://localhost:3000/tweets/";

export const TweetsProvider = ({ children }) => {
  const {user} = useUser();
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

  const CreateTweet = async (Description, PostImage) => {
    if (!Description.trim() && !PostImage) return;
    try {
      const formData = new FormData();
      // formData.append("postedBy", user.userId);
      formData.append("Description", Description);
      formData.append("tweetImage", PostImage);
      // console.log(formData, "formData");
      await axios.post(
        `http://localhost:3000/tweets/${user.userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      navigate("/")
    } catch (error) {
      return error;
    }
  };

  const deleteTweet = async (id) => {
    console.log("deleteTweet", id);
    await axios.delete(BASE_URL + "/" + id);
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
        deleteTweet,
        CreateTweet,
        TweetItems,
        deleteMutation,
        isLoading,
        error,
      }}
    >
      {children}
    </tweetsContext.Provider>
  );
};
