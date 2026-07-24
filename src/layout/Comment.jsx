import { useEffect, useState } from "react";
import Tweets from "../components/Tweets";
import { useParams } from "react-router-dom";
import { useTweets } from "../components/tweetsContext";
import Loading from "../components/Loading";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Comment() {
  const { TweetByID } = useTweets();
  const { id } = useParams();

  const [tweet, setTweet] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTweet = async () => {
      try {
        setIsLoading(true);
        const res = await TweetByID(id);
        setTweet(res);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getTweet();
  }, [TweetByID, id]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  if (!tweet) return null;

  return (
    <div className="md:w-[580px]">
      <div className="inline-flex text-xl font-bold p-2 fixed bg-slate-950/70 w-full">
        <Link to="/home">
          <GoArrowLeft />{" "}
        </Link>
        <h1 className="pl-6">Post</h1>
      </div>
      <div className="mt-9">
        <Tweets key={tweet._id} tweet={tweet} />
      </div>
    </div>
  );
}
