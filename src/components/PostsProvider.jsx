import axios from "axios";
import { PostsContext } from "./PostsContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUser } from "./UserContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const POST_URL = BASE_URL + "posts/";
const POST_REPLAY_URL = BASE_URL + "posts/replay/";

export const PostsProvider = ({ children }) => {
  const { user } = useUser();
  
  const queryClient = useQueryClient();

  const {
    data: PostItems = [],
    isLoading: isPostItemsLoading,
    error: errorPostItems,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get(POST_URL);      
      return res.data?.posts;
    },
    enabled: true,
  });

  const usePostsByUser = (username) => {
    return useQuery({
      queryKey: ["postsByUser", username],
      queryFn: async () => {
        const res = await axios.get(POST_URL + "user/" + username);
        return res.data.posts;
      },
      enabled: !!username,
    });
  };

  // const PostByID = async (id) => {
  //   if (!id) return null;
  //   try {
  //     const res = await axios.get(POST_URL + id);
  //     return res.data.posts;
  //   } catch (error) {
  //     console.error("Failed to fetch post:", error);
  //     throw error;
  //   }
  // };

  const PostByID = (id) => {
    return useQuery({
      queryKey: ["PostByID", id],
      queryFn: async () => {
        const res = await axios.get(POST_URL + id);
        return res.data.posts;
      },
    });
  };

  const useGetReplay = (id) => {
    return useQuery({
      queryKey: ["Replay", id],
      queryFn: async () => {
        const res = await axios.get(POST_REPLAY_URL + id);
        return res.data.posts;
      },
    });
  };

  // const CreatePost = async (Description, PostImage) => {
  //   if (!Description.trim() && !PostImage) return;
  //   try {
  //     const formData = new FormData();
  //     // formData.append("postedBy", user.userId);
  //     formData.append("Description", Description);
  //     formData.append("postImage", PostImage);
  //     // console.log(formData, "formData");
  //     await axios.post(POST_URL + user._id, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     navigate("/");
  //   } catch (error) {
  //     return error;
  //   }
  // };

  const { mutate: CreatePost } = useMutation({
    mutationFn: async ({ Description, postImage }) => {
      const formData = new FormData();
      formData.append("Description", Description);
      formData.append("postImage", postImage);
      await axios.post(POST_URL + user._id, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  const { mutate: CreateReplay } = useMutation({
    mutationFn: async ({ postId, ReplayText, ReplayImage }) => {
      // console.log({ postId, ReplayText, ReplayImage });

      const formData = new FormData();
      formData.append("postedBy", user._id);
      formData.append("replayText", ReplayText);
      formData.append("postImage", ReplayImage);

      await axios.post(POST_REPLAY_URL + postId, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Replay"],
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(POST_URL + id);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["Replay"] });
    },
  });

  return (
    <PostsContext.Provider
      value={{
        PostItems,
        deleteMutation,
        isPostItemsLoading,
        errorPostItems,
        useGetReplay,
        CreateReplay,
        CreatePost,
        usePostsByUser,
        PostByID,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
