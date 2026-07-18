// import { getTweets } from "../api";
import { useEffect, useState } from "react";
import CreateTweet from "../components/CreateTweet";
import Tweets from "../components/Tweets";
import axios from "axios";

export default function MainContent() {
  const [TweetItems, setTweetItems] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const res = await axios.get("http://localhost:3000/tweets");
        setTweetItems(res.data.tweets);
      } catch (error) {
        console.log(error, "error fetching tweets");
      }
    };
    fetchTweets();
    
  }, []);
    // console.log(TweetItems);
  return (
    <div className="md:w-[580px]">
      <div className="flex md:w-[580px] h-30 custom-border py-2">
        <CreateTweet />
      </div>
      {TweetItems.map((tweet) => (
        <Tweets key={tweet._id} tweet={tweet} />
      ))}
    </div>
  );
}
