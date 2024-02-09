import React from "react";
import useConversation from "../../Zustand/useConversation";
import useSocket from "../../Context/SocketContext";

const ConversationUser = (props) => {
  const { conversation, lastidx } = props;
  const { fullname, profilePic } = conversation;
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocket();

  // Remove the unused variable declaration
  const isonline = onlineUsers.includes(conversation._id);

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div>
          <div className={`avatar ${isonline ? "online" : ""}`}>
            <div className="w-12 rounded-full">
              <img src={profilePic} />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-gray-300 font-semibold">{fullname}</h3>
        </div>
      </div>
      {!lastidx && <div className="divider p-0 m-0 h-1 "></div>}
    </>
  );
};

export default ConversationUser;
