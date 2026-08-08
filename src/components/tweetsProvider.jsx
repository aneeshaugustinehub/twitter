import axios from "axios";
import { tweetsContext } from "./tweetsContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUser } from "./UserContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TWEET_URL = BASE_URL + "tweets/";
const TWEET_REPLAY_URL = BASE_URL + "tweets/replay/";

export const TweetsProvider = ({ children }) => {
  const { user } = useUser();
  
  const queryClient = useQueryClient();

  const {
    data: TweetItems = [],
    isLoading: isTweetItemsLoading,
    error: errorTweetItems,
  } = useQuery({
    queryKey: ["tweets"],
    queryFn: async () => {
      const res = await axios.get(TWEET_URL);
      return res.data.tweets;
    },
    enabled: true,
  });

  const useTweetsByUser = (username) => {
    return useQuery({
      queryKey: ["tweetsByUser", username],
      queryFn: async () => {
        const res = await axios.get(TWEET_URL + "user/" + username);
        return res.data.tweets;
      },
      enabled: !!username,
    });
  };

  // const TweetByID = async (id) => {
  //   if (!id) return null;
  //   try {
  //     const res = await axios.get(TWEET_URL + id);
  //     return res.data.tweets;
  //   } catch (error) {
  //     console.error("Failed to fetch tweet:", error);
  //     throw error;
  //   }
  // };

  const TweetByID = (id) => {
    return useQuery({
      queryKey: ["TweetByID", id],
      queryFn: async () => {
        const res = await axios.get(TWEET_URL + id);
        return res.data.tweets;
      },
    });
  };

  const useGetReplay = (id) => {
    return useQuery({
      queryKey: ["Replay", id],
      queryFn: async () => {
        const res = await axios.get(TWEET_REPLAY_URL + id);
        return res.data.tweets;
      },
    });
  };

  // const CreateTweet = async (Description, PostImage) => {
  //   if (!Description.trim() && !PostImage) return;
  //   try {
  //     const formData = new FormData();
  //     // formData.append("postedBy", user.userId);
  //     formData.append("Description", Description);
  //     formData.append("tweetImage", PostImage);
  //     // console.log(formData, "formData");
  //     await axios.post(TWEET_URL + user._id, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     navigate("/");
  //   } catch (error) {
  //     return error;
  //   }
  // };

  const { mutate: CreateTweet } = useMutation({
    mutationFn: async ({ Description, tweetImage }) => {
      const formData = new FormData();
      formData.append("Description", Description);
      formData.append("tweetImage", tweetImage);
      await axios.post(TWEET_URL + user._id, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tweets"],
      });
    },
  });

  const { mutate: CreateReplay } = useMutation({
    mutationFn: async ({ tweetId, ReplayText, ReplayImage }) => {
      // console.log({ tweetId, ReplayText, ReplayImage });

      const formData = new FormData();
      formData.append("postedBy", user._id);
      formData.append("replayText", ReplayText);
      formData.append("tweetImage", ReplayImage);

      await axios.post(TWEET_REPLAY_URL + tweetId, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Replay"],
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(TWEET_URL + id);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["tweets"] });
      queryClient.invalidateQueries({ queryKey: ["Replay"] });
    },
  });

  return (
    <tweetsContext.Provider
      value={{
        TweetItems,
        deleteMutation,
        isTweetItemsLoading,
        errorTweetItems,
        useGetReplay,
        CreateReplay,
        CreateTweet,
        useTweetsByUser,
        TweetByID,
      }}
    >
      {children}
    </tweetsContext.Provider>
  );
};
