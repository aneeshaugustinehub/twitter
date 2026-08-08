import { useState } from "react";
import { HiOutlineShare } from "react-icons/hi2";
import { MdDone } from "react-icons/md";

export function CopyLinkButton({ url }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center text-gray-500 hover:text-sky-400 group/btn transition-colors "
    >
      <span className="p-1.5 rounded-full group-hover/btn:bg-sky-400/10 transition-colors">
        {copied ? (<MdDone className="text-base" />):(<HiOutlineShare className="text-base" />)}
      </span>
    </button>
  );
}

