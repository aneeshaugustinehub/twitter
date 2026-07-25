// import { getTweets } from "../api";
import CreateTweet from "../components/CreateTweet";
import Tweets from "../components/Tweets";
import { useTweets } from "../components/tweetsContext";
import { TweetsProvider } from "../components/tweetsProvider";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function MainContent() {
  const { TweetItems, isTweetItemsLoading, errorTweetItems } = useTweets();

  if (isTweetItemsLoading) {
    return <Loading />;
  }
  if (errorTweetItems) {
    return <Error />;
  }
  return (
    <div className="md:w-[580px]">
      <div className="flex md:w-[580px] h-30 custom-border py-2">
        <TweetsProvider>
          <CreateTweet />
        </TweetsProvider>
      </div>
      {TweetItems?.map((tweet) => (
        <Tweets key={tweet._id} tweet={tweet} />
      ))}
    </div>
  );
}
