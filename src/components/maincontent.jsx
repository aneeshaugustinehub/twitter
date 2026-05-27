import Tweets from "./tweet";

export default function MainContent() {
  const tweetItems = Array.from({ length: 5 }, (_, index) => (
    <Tweets key={index} />
  ));
  return (
    <div className="color">
      {tweetItems}  
    </div>
  );
}
