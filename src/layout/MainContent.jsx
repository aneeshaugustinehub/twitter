// import { getPosts } from "../api";
import CreatePost from "../components/CreatePost";
import PostsAndReplay from "../components/PostsAndReplay";
import { usePosts } from "../components/PostsContext";
import { PostsProvider } from "../components/PostsProvider";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function MainContent() {
  const { PostItems, isPostItemsLoading, errorPostItems } = usePosts();
  

  if (isPostItemsLoading) {
    return <Loading />;
  }
  if (errorPostItems) {
    <div className="md:w-[580px]">
      return <Error />;{" "}
    </div>;
  }
  return (
    <div className="md:w-[580px]">
      <div className="flex md:w-[580px] h-30 custom-border py-2">
        <PostsProvider>
          <CreatePost />
        </PostsProvider>
      </div>
      {PostItems?.map((post) => (
        <div>
          <PostsAndReplay key={post._id} post={post} />
        </div>
      ))}
    </div>
  );
}
