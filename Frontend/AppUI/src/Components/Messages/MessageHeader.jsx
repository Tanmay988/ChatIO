import React from "react";

const MessageHeader = () => {
  return (
    <div className=" px-4 py-2 mb-2 bg-slate-500 border-b-2 border-zinc-800 shadow-md">
      <span className=" label-text text-gray-200 "> To: </span>{" "}
      <span className="text-zinc-900 font-bold">Tanmay Pampatwar</span>
    </div>
  );
};

export default MessageHeader;
