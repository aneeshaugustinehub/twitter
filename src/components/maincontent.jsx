import Tweets from "./tweet";
import Profile from "../page/Profile";

export default function MainContent() {
  const tweetItems = Array.from({ length: 30 }, (_, index) => (
    <Tweets key={index} />
  ));
  return (
    <div className="md:w-[600px]">
      <Profile/>
      {tweetItems}  
    </div>
  );
}
