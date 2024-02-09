import React from "react";
import useConversation from "../../Zustand/useConversation";
import { useAuth } from "../../Context/AuthContext";
import extractTime from "../extractTime";

const Message = (props) => {
  const { message } = props;
  const { selectedConversation } = useConversation();
  const { authUser } = useAuth();
  const isSender = message.senderID === authUser._id;
  const profilepic = isSender
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const chats = isSender ? " chat-end" : " chat-start";
  const bubbleBgColor = isSender ? "bg-blue-500" : "";
  const formattedTime = extractTime(message.createdAt);

  return (
    <>
      <div className={`chat ${chats}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilepic} />
          </div>
        </div>
        <div
          className={`chat-bubble text-white ${bubbleBgColor}  pb-2`}
        >
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {formattedTime}
        </div>
      </div>
    </>
  );
};

export default Message;
