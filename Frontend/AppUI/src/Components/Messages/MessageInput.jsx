import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import useMessage from "../../Hooks/useMessage";

const MessageInput = () => {
  const { loading, sendMessage } = useMessage();
  const [Message, setMessage] = useState("");

  const submitHandeler = async (e) => {
    e.preventDefault();
    if (!Message) return;
    await sendMessage(Message);
    setMessage("");
  };

  return (
    <>
      <div className="flex items-center justify-center py-2 gap-1">
        <form onSubmit={submitHandeler} className="flex gap-1">
          <input
            type="text"
            placeholder="Type here..."
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            className="input input-bordered w-full bg-gray-700 border-zinc-800 text-white"
          />
          <button className="btn  bg-gray-700 border-zinc-800 text-white">
            <FiSend className="text-xl " />
            {loading ? <span className="loading loading-spinner"></span> : null}
          </button>
        </form>
      </div>
    </>
  );
};

export default MessageInput;
