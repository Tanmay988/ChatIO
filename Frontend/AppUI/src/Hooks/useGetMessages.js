import React, { useEffect, useState } from "react";
import useConversation from "../Zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { message, setMessage, selectedConversation } = useConversation();

  const getMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/message/${selectedConversation._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessage(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation._id, setMessage]);
  return { message, loading };
};

export default useGetMessages;
