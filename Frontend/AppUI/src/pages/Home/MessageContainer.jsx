import React from "react";
import MessageHeader from "../../Components/Messages/MessageHeader";
import Messages from "../../Components/Messages/Messages";
import MessageInput from "../../Components/Messages/MessageInput";
import { LuMessagesSquare } from "react-icons/lu";

const MessageContainer = () => {
  const selectChat = true;
  return selectChat ? (
    <div className="md:min-w-[550px] px-4 flex flex-col">
      <MessageHeader />
      <Messages />
      <MessageInput />
    </div>
  ) : (
    noSelectChat
  );
};

const noSelectChat = (
  <>
    <div className="flex flex-col md:min-w-[550px] px-4 items-center justify-center">
      <div className="text-2xl text-gray-300 p-2">
        <p>
          Welcome Tanmay Pampatwar,<span className="text-3xl">👋</span>
        </p>
        <p>Select Chat to start messages</p>
      </div>
      <LuMessagesSquare className="w-[6rem] h-[6rem] m-2" />
    </div>
  </>
);

export default MessageContainer;
