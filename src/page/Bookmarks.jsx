import { useState } from "react";
import { FiSearch, FiTrash2 } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiRepost, BiMessageRounded, BiBookmark, BiBookmarkMinus } from "react-icons/bi";
import { HiOutlineShare } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineBookmarkRemove } from "react-icons/md";
import {initialBookmarks } from "../components/DemoData"

const avatarColors = [
  "bg-blue-500", "bg-purple-500", "bg-green-500",
  "bg-orange-500", "bg-pink-500", "bg-teal-500",
];

const ALL_TAGS = ["All", ...Array.from(new Set(initialBookmarks.flatMap((b) => b.tags)))];

function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(".0", "") + "K";
  return n.toString();
}

function TweetCard({ bookmark, onLike, onRemove }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-4 py-4 border-b border-gray-800 dark:hover:bg-gray-900/50 hover:bg-gray-200/50 transition-colors group relative">
      <div className="flex gap-3">
        <div className={`w-10 h-10 rounded-full ${avatarColors[bookmark.color]} flex items-center justify-center text-black dark:text-white font-semibold text-sm flex-shrink-0`}>
          {bookmark.init}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="font-semibold text-black dark:text-white text-sm">{bookmark.name}</span>
              {bookmark.verified && <RiVerifiedBadgeFill className="text-sky-500 text-sm flex-shrink-0" />}
              <span className="text-gray-500 text-sm">{bookmark.handle}</span>
              <span className="text-gray-600 text-sm">·</span>
              <span className="text-gray-500 text-sm">{bookmark.time}</span>
            </div>
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-sky-400 hover:bg-sky-400/10 p-1.5 rounded-full transition-all"
                aria-label="More options"
              >
                <BsThreeDots />
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-8 bg-black border border-gray-700 rounded-xl shadow-lg z-10 w-48 overflow-hidden">
                  <button
                    onClick={() => { onRemove(bookmark.id); setMenuOpen(false); }}
                    className="flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 dark:hover:bg-gray-900 hover:bg-gray-200 transition-colors"
                  >
                    <MdOutlineBookmarkRemove className="text-base" />
                    Remove bookmark
                  </button>
                </div>
              )}
            </div>
          </div>

          <p className="text-black dark:text-white text-sm leading-relaxed mt-1 whitespace-pre-wrap">{bookmark.text}</p>

          <div className="flex items-center gap-1 mt-2 flex-wrap">
            {bookmark.tags.map((tag) => (
              <span key={tag} className="text-xs text-sky-500 hover:underline cursor-pointer">#{tag}</span>
            ))}
          </div>

          <div className="flex items-center gap-5 mt-3">
            <button className="flex items-center gap-1.5 text-gray-500 hover:text-sky-400 group/btn transition-colors">
              <span className="p-1.5 rounded-full group-hover/btn:bg-sky-400/10 transition-colors">
                <BiMessageRounded className="text-base" />
              </span>
              <span className="text-xs">{formatCount(bookmark.replies)}</span>
            </button>
            <button className="flex items-center gap-1.5 text-gray-500 hover:text-green-400 group/btn transition-colors">
              <span className="p-1.5 rounded-full group-hover/btn:bg-green-400/10 transition-colors">
                <BiRepost className="text-lg" />
              </span>
              <span className="text-xs">{formatCount(bookmark.reposts)}</span>
            </button>
            <button
              onClick={() => onLike(bookmark.id)}
              className={`flex items-center gap-1.5 group/btn transition-colors ${bookmark.liked ? "text-pink-500" : "text-gray-500 hover:text-pink-500"}`}
            >
              <span className="p-1.5 rounded-full group-hover/btn:bg-pink-500/10 transition-colors">
                {bookmark.liked ? <AiFillHeart className="text-base" /> : <AiOutlineHeart className="text-base" />}
              </span>
              <span className="text-xs">{formatCount(bookmark.likes + (bookmark.liked ? 0 : 0))}</span>
            </button>
            <button className="flex items-center gap-1.5 text-gray-500 hover:text-sky-400 group/btn transition-colors">
              <span className="p-1.5 rounded-full group-hover/btn:bg-sky-400/10 transition-colors">
                <HiOutlineShare className="text-base" />
              </span>
            </button>
            <button
              onClick={() => onRemove(bookmark.id)}
              className="flex items-center gap-1.5 text-sky-500 hover:text-sky-400 group/btn transition-colors ml-auto"
              aria-label="Remove bookmark"
            >
              <span className="p-1.5 rounded-full group-hover/btn:bg-sky-400/10 transition-colors">
                <BiBookmarkMinus className="text-base" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState(initialBookmarks);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [showConfirm, setShowConfirm] = useState(false);

  const onLike = (id) =>
    setBookmarks((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, liked: !b.liked, likes: b.liked ? b.likes - 1 : b.likes + 1 } : b
      )
    );

  const onRemove = (id) => setBookmarks((prev) => prev.filter((b) => b.id !== id));

  const clearAll = () => { setBookmarks([]); setShowConfirm(false); };

  const filtered = bookmarks.filter((b) => {
    const matchTag = activeTag === "All" || b.tags.includes(activeTag);
    const matchSearch =
      !search ||
      b.text.toLowerCase().includes(search.toLowerCase()) ||
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchTag && matchSearch;
  });

  return (
    <div className="flex flex-col w-full max-w-[580px] min-h-screen border-x border-gray-800">

      {/* Header */}
      <div className="sticky top-0 z-10 dark:bg-black/80 bg-white/80 backdrop-blur-sm px-4 py-3.5 border-b border-gray-800 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-black dark:text-white">Bookmarks</h1>
          <p className="text-xs text-gray-500">@you</p>
        </div>
        {bookmarks.length > 0 && (
          <button
            onClick={() => setShowConfirm(true)}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-red-400 transition-colors px-3 py-1.5 rounded-full hover:bg-red-400/10"
          >
            <FiTrash2 className="text-base" />
            Clear all
          </button>
        )}
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b border-gray-800">
        <div className="relative">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-base" />
          <input
            type="text"
            placeholder="Search bookmarks"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full dark:hover:bg-gray-900 hover:bg-gray-200 rounded-full py-2 pl-10 pr-4 text-sm text-black dark:text-white outline-none border border-transparent focus:border-sky-500 dark:focus:bg-black focus:bg-white transition-colors placeholder-gray-500"
          />
        </div>
      </div>

      {/* Tag filters */}
      <div className="flex gap-2 px-4 py-3 border-b border-gray-800 overflow-x-auto">
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
              activeTag === tag
                ? "dark:bg-white dark:text-black bg-black text-white"
                : "dark:bg-gray-900 bg-gray-200 text-gray-400 hover:bg-gray-800 border border-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Count */}
      {filtered.length > 0 && (
        <div className="px-4 py-2 border-b border-gray-800">
          <p className="text-xs text-gray-500">{filtered.length} bookmark{filtered.length !== 1 ? "s" : ""}</p>
        </div>
      )}

      {/* Bookmarks list */}
      {filtered.length > 0 ? (
        filtered.map((b) => (
          <TweetCard key={b.id} bookmark={b} onLike={onLike} onRemove={onRemove} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center px-8">
          <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5">
            <BiBookmark className="text-sky-400 text-3xl" />
          </div>
          <p className="text-2xl font-bold text-black dark:text-white mb-2">
            {search || activeTag !== "All" ? "No results" : "Save posts for later"}
          </p>
          <p className="text-gray-500 text-sm max-w-xs">
            {search || activeTag !== "All"
              ? "Try a different search or filter."
              : "Bookmark posts to easily find them again in the future."}
          </p>
        </div>
      )}

      {/* Clear all confirm modal */}
      {showConfirm && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={() => setShowConfirm(false)}
        >
          <div
            className="bg-black border border-gray-700 rounded-2xl p-6 w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-black dark:text-white mb-2">Clear all bookmarks?</h2>
            <p className="text-gray-400 text-sm mb-6">
              This will remove all posts you've bookmarked. This can't be undone.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={clearAll}
                className="w-full py-3 bg-red-500 hover:bg-red-400 text-black dark:text-white font-semibold rounded-full transition-colors text-sm"
              >
                Clear all
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="w-full py-3 border border-gray-600 dark:hover:bg-gray-900 hover:bg-gray-200 text-black dark:text-white font-semibold rounded-full transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}