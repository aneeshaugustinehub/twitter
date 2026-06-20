import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { BiRepost, BiMessageRounded } from "react-icons/bi";
import { HiOutlineAtSymbol } from "react-icons/hi";
import { RiUserFollowLine } from "react-icons/ri";
import { notifications } from "../components/DemoData";
const avatarColors = [
  "bg-blue-500", "bg-purple-500", "bg-green-500",
  "bg-orange-500", "bg-pink-500", "bg-yellow-500",
];

const iconMap = {
  like: { Icon: AiOutlineHeart, color: "text-pink-500", bg: "bg-pink-500/10" },
  follow: { Icon: RiUserFollowLine, color: "text-sky-500", bg: "bg-sky-500/10" },
  repost: { Icon: BiRepost, color: "text-green-500", bg: "bg-green-500/10" },
  reply: { Icon: BiMessageRounded, color: "text-sky-500", bg: "bg-sky-500/10" },
  mention: { Icon: HiOutlineAtSymbol, color: "text-purple-500", bg: "bg-purple-500/10" },
};

const TABS = ["All", "Verified", "Mentions"];

function NotifItem({ n, idx, onRead }) {
  const { Icon, color, bg } = iconMap[n.type];
  const multi = n.users.length > 1;

  return (
    <div
      onClick={() => onRead(idx)}
      className={`flex gap-3 px-4 py-3.5 border-b border-gray-800 cursor-pointer transition-colors dark:hover:bg-gray-900 hover:bg-gray-200 items-start ${n.unread ? "bg-sky-500/[0.03]" : ""}`}
    >
      <div className="flex flex-col items-center gap-2 flex-shrink-0">
        <div className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center`}>
          <Icon className={`${color} text-lg`} />
        </div>
        <div className="flex">
          {n.users.slice(0, 3).map((u, i) => (
            <div
              key={i}
              className={`${multi ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm"} rounded-full ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-black dark:text-white font-semibold flex-shrink-0 ${i > 0 ? "-ml-2" : ""}`}
              style={{ zIndex: 3 - i }}
            >
              {u}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 min-w-0 pt-1">
        <div className="flex justify-between items-start gap-2">
          <p className="text-sm leading-snug">
            <span className="font-semibold text-black dark:text-white">{n.names}</span>
            <span className="text-gray-400"> {n.text}</span>
          </p>
          <span className="text-xs text-gray-500 flex-shrink-0">{n.time}</span>
        </div>
        {n.content && (
          <p className="text-sm text-gray-500 mt-1.5 border-l-2 border-gray-700 pl-2">
            {n.content}
          </p>
        )}
        {n.unread && (
          <div className="w-2 h-2 rounded-full bg-sky-500 mt-2" />
        )}
      </div>
    </div>
  );
}

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("All");
  const [notifs, setNotifs] = useState(notifications);

  const markAllRead = () => setNotifs(notifs.map((n) => ({ ...n, unread: false })));
  const markRead = (idx) => setNotifs(notifs.map((n, i) => i === idx ? { ...n, unread: false } : n));

  const filtered = {
    All: notifs,
    Verified: notifs.filter((_, i) => i % 3 === 0),
    Mentions: notifs.filter((n) => n.type === "mention" || n.type === "reply"),
  };

  const list = filtered[activeTab];
  const unreadCount = notifs.filter((n) => n.unread).length;

  return (
    <div className="flex flex-col w-full max-w-[600px] min-h-screen border-x border-gray-800">

      {/* Header */}
      <div className="sticky top-0 z-10 dark:bg-black/80 bg-white/80 backdrop-blur-sm px-4 py-3.5 border-b border-gray-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-black dark:text-white">Notifications</h1>
          {unreadCount > 0 && (
            <span className="bg-sky-500 text-black dark:text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        <button className="text-gray-400 dark:hover:text-white hover:text-black transition-colors p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
          <IoSettingsOutline className="text-xl" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-sm font-medium transition-colors dark:hover:bg-gray-900 hover:bg-gray-200 ${
              activeTab === tab
                ? "text-black dark:text-white border-b-2 border-sky-500"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mark all read */}
      {activeTab === "All" && unreadCount > 0 && (
        <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-800">
          <p className="text-sm font-medium text-black dark:text-white">New notifications</p>
          <button
            onClick={markAllRead}
            className="text-sm text-sky-500 hover:underline"
          >
            Mark all as read
          </button>
        </div>
      )}

      {/* Notification list */}
      {list.length > 0 ? (
        list.map((n, i) => (
          <NotifItem key={i} n={n} idx={notifications.indexOf(n)} onRead={markRead} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center px-8">
          <p className="text-2xl font-bold text-black dark:text-white mb-2">Nothing here yet</p>
          <p className="text-gray-500 text-sm">
            {activeTab === "Mentions"
              ? "When someone mentions you, it'll show up here."
              : "When you get notifications, they'll show up here."}
          </p>
        </div>
      )}
    </div>
  );
}