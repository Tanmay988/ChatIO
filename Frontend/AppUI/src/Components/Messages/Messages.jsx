import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../Hooks/useGetMessages";
import useListenMessages from "../../Hooks/useListenMessages";

const Messages = () => {
  const { loading, message = [] } = useGetMessages();
  useListenMessages();

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [message]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        message.length > 0 &&
        message.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {!loading && message.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
