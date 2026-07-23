import { useState } from "react";
import { FiSearch, FiEdit } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
// import { HiOutlinePhoto } from "react-icons/hi2";
import { BsEmojiSmile, BsImage } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";
import { MdOutlineGif } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { conversations, initialMessages} from "../components/DemoData";

// console.log(conversations,"demo data");

const avatarColors = [
  "bg-blue-500", "bg-purple-500", "bg-green-500",
  "bg-orange-500", "bg-pink-500", "bg-teal-500",
];

export default function Messages() {
  const [activeId, setActiveId] = useState(null);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [convos, setConvos] = useState(conversations);

  const activeConvo = convos.find((c) => c.id === activeId);
  const activeMessages = activeId ? messages[activeId] || [] : [];

  const filteredConvos = convos.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.handle.toLowerCase().includes(search.toLowerCase())
  );

  const openConvo = (id) => {
    setActiveId(id);
    setConvos((prev) =>
      prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c))
    );
  };

  const sendMessage = () => {
    if (!input.trim() || !activeId) return;
    const newMsg = {
      id: Date.now(),
      from: "me",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] || []), newMsg],
    }));
    setConvos((prev) =>
      prev.map((c) => (c.id === activeId ? { ...c, lastMsg: input.trim(), time: "now" } : c))
    );
    setInput("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const totalUnread = convos.reduce((sum, c) => sum + c.unread, 0);

  return (
    <div className="flex w-full max-w-[980px] min-h-screen border-x border-gray-800">

      {/* Sidebar */}
      <div className={`flex flex-col border-r border-gray-800 ${activeId ? "hidden md:flex w-[360px]" : "flex w-full md:w-[360px]"} flex-shrink-0`}>

        {/* Header */}
        <div className="sticky top-0 z-10 dark:bg-black/80 bg-white/80 backdrop-blur-sm px-4 py-3.5 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-black dark:text-white">Messages</h1>
            {totalUnread > 0 && (
              <span className="bg-sky-500 text-black dark:text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {totalUnread}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button className="text-gray-400 dark:hover:text-white hover:text-black p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <IoSettingsOutline className="text-xl" />
            </button>
            <button className="text-gray-400 dark:hover:text-white hover:text-black p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <FiEdit className="text-xl" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-gray-800">
          <div className="relative">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-base" />
            <input
              type="text"
              placeholder="Search Direct Messages"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full dark:bg-gray-900 bg-gray-200 rounded-full py-2 pl-10 pr-4 text-sm text-black dark:text-white outline-none border border-transparent focus:border-sky-500 dark:focus:bg-black focus:bg-white transition-colors placeholder-gray-500"
            />
          </div>
        </div>

        {/* Conversation list */}
        <div className="flex-1 overflow-y-auto">
          {filteredConvos.length === 0 ? (
            <p className="text-center text-gray-500 text-sm py-12">No conversations found</p>
          ) : (
            filteredConvos.map((c, i) => (
              <div
                key={c.id}
                onClick={() => openConvo(c.id)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors dark:hover:bg-gray-900 hover:bg-gray-200 border-b border-gray-800/50 ${activeId === c.id ? "dark:bg-gray-900 bg-gray-200" : ""}`}
              >
                <div className="relative flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-black dark:text-white font-semibold text-sm`}>
                    {c.init}
                  </div>
                  {c.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 dark:border-black border-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-semibold text-black dark:text-white truncate">{c.name}</p>
                      {c.verified && <RiVerifiedBadgeFill className="text-sky-500 text-sm flex-shrink-0" />}
                    </div>
                    <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{c.time}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <p className={`text-sm truncate ${c.unread > 0 ? "text-black dark:text-white font-medium" : "text-gray-500"}`}>
                      {c.lastMsg}
                    </p>
                    {c.unread > 0 && (
                      <span className="bg-sky-500 text-black dark:text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Chat area */}
      {activeId ? (
        <div className="flex flex-col flex-1 min-w-0">

          {/* Chat header */}
          <div className="sticky top-0 z-10 dark:bg-black/80 bg-white/80 backdrop-blur-sm px-4 py-3 border-b border-gray-800 flex items-center gap-3">
            <button
              onClick={() => setActiveId(null)}
              className="md:hidden text-gray-400 dark:hover:text-white hover:text-black mr-1"
            >
              ←
            </button>
            <div className="relative flex-shrink-0">
              <div className={`w-10 h-10 rounded-full ${avatarColors[convos.findIndex(c=>c.id===activeId) % avatarColors.length]} flex items-center justify-center text-black dark:text-white font-semibold text-sm`}>
                {activeConvo?.init}
              </div>
              {activeConvo?.online && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 dark:border-black border-white" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <p className="font-semibold text-black dark:text-white text-sm">{activeConvo?.name}</p>
                {activeConvo?.verified && <RiVerifiedBadgeFill className="text-sky-500 text-sm" />}
              </div>
              <p className="text-xs text-gray-500">{activeConvo?.handle}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2">
            {activeMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] ${msg.from === "me" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                  <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "me"
                      ? "bg-sky-500 text-gray-50 rounded-br-sm"
                      : "bg-gray-800 text-gray-50 rounded-bl-sm"
                  }`}>
                    {msg.text}
                  </div>
                  <span className="text-xs text-gray-600 px-1">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-800 px-4 py-3">
            <div className="flex items-center gap-2 dark:bg-gray-900 bg-gray-200 rounded-2xl px-3 py-2">
              <button className="text-sky-500 hover:text-sky-400 transition-colors p-1" aria-label="Add image">
                <BsImage className="text-lg" />
              </button>
              <button className="text-sky-500 hover:text-sky-400 transition-colors p-1" aria-label="Add GIF">
                <MdOutlineGif className="text-xl" />
              </button>
              <button className="text-sky-500 hover:text-sky-400 transition-colors p-1" aria-label="Add emoji">
                <BsEmojiSmile className="text-lg" />
              </button>
              <input
                type="text"
                placeholder="Start a new message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                className="flex-1 bg-transparent text-black dark:text-white text-sm outline-none placeholder-gray-500"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className={`p-1.5 rounded-full transition-all ${
                  input.trim()
                    ? "text-sky-500 hover:bg-sky-500/10"
                    : "text-gray-600 cursor-not-allowed"
                }`}
                aria-label="Send message"
              >
                <IoSendSharp className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-col flex-1 items-center justify-center text-center px-8">
          <p className="text-3xl font-bold text-black dark:text-white mb-2">Select a message</p>
          <p className="text-gray-500 text-sm max-w-xs">Choose from your existing conversations, or start a new one.</p>
          <button className="mt-6 bg-sky-500 hover:bg-sky-400 text-black dark:text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm">
            New message
          </button>
        </div>
      )}
    </div>
  );
}