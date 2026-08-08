
export function Confirm() {

  return (
    <>

        <div
          className="bg-black border border-gray-700 rounded-2xl p-6 w-full max-w-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold text-black dark:text-white mb-2">
            Clear all bookmarks?
          </h2>
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
    </>
  );
}

export default Confirm;
