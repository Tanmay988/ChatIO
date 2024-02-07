import React, { useEffect } from "react";
import MessageHeader from "../../Components/Messages/MessageHeader";
import Messages from "../../Components/Messages/Messages";
import MessageInput from "../../Components/Messages/MessageInput";
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from "../../Zustand/useConversation";
import { useAuth } from "../../Context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return selectedConversation ? (
    <div className="md:min-w-[550px] px-4 flex flex-col">
      <MessageHeader />
      <Messages />
      <MessageInput />
    </div>
  ) : (
    <NoSelectChat />
  );
};

const NoSelectChat = () => {
  const { authUser } = useAuth();
  return (
    <div className="flex flex-col md:min-w-[550px] px-4 items-center justify-center">
      <div className="text-2xl text-gray-300 p-2">
        <p className="text-center">
          Welcome {authUser.username},<span className="text-3xl">👋</span>
        </p>
        <p>Select Chat to start messages</p>
      </div>
      <LuMessagesSquare className="w-[6rem] h-[6rem] m-2" />
    </div>
  );
};

export default MessageContainer;
