import { trends } from "./DemoData"

export default function Happening() {

function TrendItem({ item }) {
  
  return (
    <div className="px-1 py-3 border-b border-gray-800 dark:hover:bg-gray-900 hover:bg-gray-200 cursor-pointer rounded-lg transition-colors">
      <p className="text-xs text-gray-500">{item.cat}</p>
      <p className="text-sm font-semibold text-black dark:text-white mt-0.5">{item.tag}</p>
      <p className="text-xs text-gray-500 mt-0.5 ">{item.posts} posts</p>
    </div>
  );
}
  
  return <>
          <div className="px-4 py-3 border border-gray-800 my-2 mx-4 rounded-2xl">
            <h2 className="text-xl font-bold text-black dark:text-white mb-3">Trending now</h2>
            {trends.slice(0, 4).map((t, i) => <TrendItem key={i} item={t} />)}
          </div>
        </>
}
