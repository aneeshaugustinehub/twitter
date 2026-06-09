import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlinePhoto } from "react-icons/hi2";

const TABS = ["For you", "Trending", "News", "Sports", "Entertainment"];
const trends = []
const users = []
const news = []
const sports = []
const entertainment = []


function TrendItem({ item }) {
  return (
    <div className="px-1 py-3 border-b border-gray-800 hover:bg-gray-900 cursor-pointer rounded-lg transition-colors">
      <p className="text-xs text-gray-500">{item.cat}</p>
      <p className="text-sm font-semibold text-white mt-0.5">{item.tag}</p>
      <p className="text-xs text-gray-500 mt-0.5">{item.posts} posts</p>
    </div>
  );
}

function NewsItem({ item }) {
  return (
    <div className="flex gap-3 px-1 py-3 border-b border-gray-800 hover:bg-gray-900 cursor-pointer rounded-lg transition-colors items-start">
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500 mb-1">{item.cat} · {item.time}</p>
        <p className="text-sm font-medium text-white leading-snug">{item.title}</p>
      </div>
      <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
        <HiOutlinePhoto className="text-gray-600 text-2xl" />
      </div>
    </div>
  );
}

function FollowButton() {
  const [following, setFollowing] = useState(false);
  return (
    <button
      onClick={() => setFollowing(!following)}
      className={`rounded-full px-4 py-1.5 text-sm font-semibold flex-shrink-0 transition-colors ${
        following
          ? "border border-gray-600 text-white hover:border-red-500 hover:text-red-500"
          : "bg-white text-black hover:bg-gray-200"
      }`}
    >
      {following ? "Following" : "Follow"}
    </button>
  );
}

export default function Explore() {
  const [activeTab, setActiveTab] = useState("For you");
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col w-full max-w-[600px] min-h-screen border-x border-gray-800">

      {/* Search bar */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm px-4 py-3 border-b border-gray-800">
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full bg-gray-900 rounded-full py-2.5 pl-12 pr-4 text-white text-sm outline-none border border-transparent focus:border-sky-500 focus:bg-black transition-colors placeholder-gray-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-sm font-medium whitespace-nowrap transition-colors hover:bg-gray-900 ${
              activeTab === tab
                ? "text-white border-b-2 border-sky-500"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* For you */}
      {activeTab === "For you" && (
        <>
          <div className="px-4 py-3 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white mb-3">Trending now</h2>
            {trends.slice(0, 4).map((t, i) => <TrendItem key={i} item={t} />)}
          </div>

          <div className="px-4 py-3 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white mb-3">Who to follow</h2>
            {users.map((u, i) => (
              <div key={i} className="flex items-center gap-3 py-2.5 hover:bg-gray-900 rounded-lg px-1 cursor-pointer transition-colors">
                <div className={`w-11 h-11 rounded-full ${u.color} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
                  {u.init}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">{u.name}</p>
                  <p className="text-xs text-gray-500">{u.handle}</p>
                  <p className="text-xs text-gray-400">{u.bio}</p>
                </div>
                <FollowButton />
              </div>
            ))}
            <button className="text-sky-500 text-sm mt-2 hover:underline">Show more</button>
          </div>

          <div className="px-4 py-3">
            <h2 className="text-xl font-bold text-white mb-3">Latest news</h2>
            {news.slice(0, 3).map((n, i) => <NewsItem key={i} item={n} />)}
          </div>
        </>
      )}

      {/* Trending */}
      {activeTab === "Trending" && (
        <div className="px-4 py-3">
          <h2 className="text-xl font-bold text-white mb-3">Trending topics</h2>
          {trends.map((t, i) => <TrendItem key={i} item={t} />)}
        </div>
      )}

      {/* News */}
      {activeTab === "News" && (
        <div className="px-4 py-3">
          <h2 className="text-xl font-bold text-white mb-3">Top stories</h2>
          {news.map((n, i) => <NewsItem key={i} item={n} />)}
        </div>
      )}

      {/* Sports */}
      {activeTab === "Sports" && (
        <div className="px-4 py-3">
          <h2 className="text-xl font-bold text-white mb-3">Sports</h2>
          {sports.map((n, i) => <NewsItem key={i} item={n} />)}
        </div>
      )}

      {/* Entertainment */}
      {activeTab === "Entertainment" && (
        <div className="px-4 py-3">
          <h2 className="text-xl font-bold text-white mb-3">Entertainment</h2>
          {entertainment.map((n, i) => <NewsItem key={i} item={n} />)}
        </div>
      )}

    </div>
  );
}