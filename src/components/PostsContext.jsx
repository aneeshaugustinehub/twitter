import { createContext, useContext } from "react";

export const PostsContext = createContext(null);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used inside <postProvider>");
  }
  return context;
};
