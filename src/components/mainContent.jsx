import Post from "./Post";
import Tweets from "./tweet";

export default function MainContent() {
  const tweetItems = Array.from({ length: 30 }, (_, index) => (
    <Tweets key={index} />
  ));
  return (
    <div className="md:w-[580px]">
      <div className="flex md:w-[580px] h-30 custom-border py-2">
        <Post />
      </div>
      {tweetItems}
    </div>
  );
}
