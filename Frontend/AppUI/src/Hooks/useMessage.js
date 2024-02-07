import React, { useState } from "react";
import useConversation from "../Zustand/useConversation";
import toast from "react-hot-toast"; // Add missing import statement

const useMessage = () => {
  const { message, setMessage, selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);

  const sendMessage = async (msg) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/message/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: msg }),
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessage([...message, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};

export default useMessage;
