import Tweets from "./tweet";

export default function MainContent() {
  const tweetItems = Array.from({ length: 30 }, (_, index) => (
    <Tweets key={index} />
  ));
  return (
    <div className="md:w-[600px]">
      {tweetItems}  
    </div>
  );
}
