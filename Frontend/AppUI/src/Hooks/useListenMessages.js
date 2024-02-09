import React, { useEffect } from "react";
import useSocket from "../Context/SocketContext";
import useConversation from "../Zustand/useConversation";
import notificationSound from "../assets/sound/notificationSound.mp3";

const useListenMessages = () => {
  const { socket } = useSocket();
  const { message, setMessage } = useConversation();

  useEffect(() => {
    socket?.on("getMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();
      setMessage([...message, newMessage]);
    });
    return () => {
      socket?.off("getMessage");
    };
  }, [socket, message, setMessage]);
};

export default useListenMessages;
