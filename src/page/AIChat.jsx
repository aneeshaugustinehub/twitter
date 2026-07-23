import { useState, useRef, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";
import { MdContentCopy, MdOutlineRefresh } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";

const suggestions = [
  { icon: "✍️", label: "Write a tweet", prompt: "Write a viral tweet about React and Vite that developers would love" },
  { icon: "🧵", label: "Thread ideas", prompt: "Give me 5 ideas for a Twitter thread about building a Twitter clone with React" },
  { icon: "💡", label: "Explain code", prompt: "Explain how React Router v6 layout routes work in simple terms" },
  { icon: "🐛", label: "Debug help", prompt: "My useEffect is causing an infinite loop. What are the common causes?" },
  { icon: "🎨", label: "Bio writer", prompt: "Write a Twitter bio for a frontend developer who loves React, Vite, and Tailwind CSS" },
  { icon: "📈", label: "Growth tips", prompt: "Give me 5 tips to grow a developer Twitter account from 0 to 1000 followers" },
];

function TypingIndicator() {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
        <RiRobot2Line className="text-sky-400 text-sm" />
      </div>
      <div className="dark:bg-gray-900 bg-gray-200 border border-gray-800 rounded-2xl rounded-tl-sm px-4 py-3">
        <div className="flex gap-1 items-center h-5">
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

function Message({ msg, onCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy(msg.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (msg.from === "me") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-sky-500 text-black dark:text-white px-4 py-2.5 rounded-2xl rounded-br-sm text-sm leading-relaxed">
          {msg.text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 items-start group">
      <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
        <RiRobot2Line className="text-sky-400 text-sm" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="dark:bg-gray-900 bg-gray-200 border border-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-black dark:text-white leading-relaxed whitespace-pre-wrap">
          {msg.text}
        </div>
        <div className="flex gap-2 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors px-2 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <MdContentCopy className="text-sm" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { id: Date.now(), from: "me", text: userText }]);
    setLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.from === "me" ? "user" : "assistant",
        content: m.text,
      }));

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: "You are a helpful AI assistant built into a Twitter-like app called Tweetly. You help users write tweets, threads, bios, and answer questions about coding and social media growth. Keep responses concise and conversational. When writing tweets, make them engaging and ready to post.",
          messages: [...history, { role: "user", content: userText }],
        }),
      });

      const data = await response.json();
      const reply = data.content?.[0]?.text || "Sorry, I couldn't generate a response.";

      setMessages((prev) => [...prev, { id: Date.now() + 1, from: "ai", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "ai", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => setMessages([]);

  const copyText = (text) => navigator.clipboard.writeText(text).catch(() => {});

  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-col w-full max-w-[980px] min-h-screen border-x border-gray-800">

      {/* Header */}
      <div className="sticky top-0 z-10 dark:bg-black/80 bg-white/80 backdrop-blur-sm px-4 py-3.5 border-b border-gray-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BsStars className="text-sky-400 text-xl" />
          <h1 className="text-xl font-bold text-black dark:text-white">AI Assistant</h1>
        </div>
        {!isEmpty && (
          <button
            onClick={clearChat}
            className="flex items-center gap-1.5 text-sm text-gray-400 dark:hover:text-white hover:text-black transition-colors px-3 py-1.5 rounded-full hover:bg-gray-800"
          >
            <MdOutlineRefresh className="text-base" />
            New chat
          </button>
        )}
      </div>

      {/* Empty state */}
      {isEmpty && (
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
          <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5">
            <HiOutlineSparkles className="text-sky-400 text-3xl" />
          </div>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-2 text-center">What can I help with?</h2>
          <p className="text-gray-500 text-sm text-center mb-8 max-w-sm">
            Ask me to write tweets, threads, bios, explain code, or anything else.
          </p>
          <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => sendMessage(s.prompt)}
                className="flex items-center gap-2.5 px-4 py-3 dark:bg-gray-900 bg-gray-200 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 rounded-xl text-left transition-all group"
              >
                <span className="text-lg">{s.icon}</span>
                <span className="text-sm text-black dark:text-white group-dark:hover:text-white group-hover:text-black transition-colors">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      {!isEmpty && (
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
          {messages.map((msg) => (
            <Message key={msg.id} msg={msg} onCopy={copyText} />
          ))}
          {loading && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>
      )}

      {/* Input */}
      <div className={`border-t border-gray-800 px-4 py-3 ${isEmpty ? "mt-auto" : ""}`}>
        <div className="flex items-end gap-2 dark:bg-gray-900 bg-gray-200 border border-gray-800 focus-within:border-sky-500/50 rounded-2xl px-3 py-2.5 transition-colors">
          <button className="text-sky-500 hover:text-sky-400 transition-colors p-1 mb-0.5 flex-shrink-0" aria-label="Emoji">
            <BsEmojiSmile className="text-lg" />
          </button>
          <textarea
            ref={inputRef}
            rows={1}
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
            }}
            onKeyDown={handleKey}
            className="flex-1 bg-transparent text-black dark:text-white text-sm outline-none placeholder-gray-500 resize-none leading-relaxed"
            style={{ minHeight: "24px", maxHeight: "120px" }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            className={`p-1.5 rounded-full transition-all mb-0.5 flex-shrink-0 ${
              input.trim() && !loading
                ? "text-sky-500 hover:bg-sky-500/10"
                : "text-gray-600 cursor-not-allowed"
            }`}
            aria-label="Send"
          >
            <IoSendSharp className="text-lg" />
          </button>
        </div>
        <p className="text-center text-xs text-gray-600 mt-2">AI can make mistakes. Use your judgment.</p>
      </div>
    </div>
  );
}