import React from "react";
import ConversationUser from "./ConversationUser";

const Conversations = () => {
  return (
    <>
      <div className="flex flex-col gap-2 overflow-auto">
        <ConversationUser />
        <ConversationUser />
        <ConversationUser />
        <ConversationUser />
        <ConversationUser />
        <ConversationUser />
      </div>
    </>
  );
};

export default Conversations;
