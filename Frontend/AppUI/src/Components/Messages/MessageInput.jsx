import React from "react";
import { FiSend } from "react-icons/fi";

const MessageInput = () => {
  return (
    <>
      <div className="flex items-center justify-center py-2 gap-1">
        <input
          type="text"
          placeholder="Type here..."
          className="input input-bordered w-full bg-gray-700 border-zinc-800 text-white"
        />
        <button className="btn  bg-gray-700 border-zinc-800 text-white">
          <FiSend className="text-xl " />
        </button>
      </div>
    </>
  );
};

export default MessageInput;
