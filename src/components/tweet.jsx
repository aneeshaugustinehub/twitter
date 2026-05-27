export default function Tweets() {
  return (
    <div className="border border-gray-700 px-3 pt-2">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="shrink-0">
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Username row */}
          <div>
            <a href="" className="font-bold text-white">
              username{" "}
            </a>
            <span className="font-light text-gray-500">@userid</span>
          </div>

          {/* Tweet text */}
          <p className="mt-1 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          {/* Image */}
          <div>
            <img
              className="rounded-2xl w-full"
              src="https://picsum.photos/300/200"
              alt="post image"
            />
          </div>

          {/* Action buttons */}
          <div className="flex justify-between pt-2 text-white">
            <button type="button" className="p-2 hover:text-blue-400">
              💬
            </button>
            <button type="button" className="p-2 hover:text-green-400">
              🔁
            </button>
            <button type="button" className="p-2 hover:text-pink-400">
              🤍
            </button>
            <button type="button" className="p-2 hover:text-yellow-400">
              🔖
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}