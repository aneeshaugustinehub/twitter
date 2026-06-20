import { HiOutlinePhoto } from "react-icons/hi2";
import { news } from "./DemoData";


export default function News() {
function NewsItem({ item }) {
  return (
    <div className="flex gap-3 px-1 py-3 border-b border-gray-800 dark:hover:bg-gray-900 hover:bg-gray-200 cursor-pointer rounded-lg transition-colors items-start">
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500 mb-1">{item.cat} · {item.time}</p>
        <p className="text-sm font-medium text-black dark:text-white leading-snug">{item.title}</p>
      </div>
      <div className="w-16 h-16 rounded-xl dark:bg-gray-900 bg-gray-200 flex items-center justify-center flex-shrink-0">
        <HiOutlinePhoto className="text-gray-600 text-2xl" />
      </div>
    </div>
  );
}
  return (
    <>
          <div className="px-4 py-3">
            <h2 className="text-xl font-bold text-black dark:text-white mb-3">Latest news</h2>
            {news.slice(0, 3).map((n, i) => <NewsItem key={i} item={n} />)}
          </div>
    </>
  );
}
