import { createContext, useContext } from "react";

export const tweetsContext = createContext(null);

export const useTweets = () => {
  const context = useContext(tweetsContext);
  if (!context) {
    throw new Error("useTweets must be used inside <tweetProvider>");
  }
  return context;
};
