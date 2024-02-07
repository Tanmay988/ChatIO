import React from "react";
import ConversationUser from "./ConversationUser";
import useGetConversation from "../../Hooks/useGetConversation";

const Conversations = () => {
  const { loading, conversation } = useGetConversation();
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center">
          <div className="loading-spinner loading "></div>
        </div>
      )}
      <div className="flex flex-col gap-2 overflow-auto">
        {conversation.map((val, idx) => (
          <ConversationUser
            key={val._id}
            conversation={val}
            lastidx={idx === val.length - 1}
          />
        ))}
      </div>
    </>
  );
};

export default Conversations;
