import { useContext, createContext, useState, useEffect } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthContext";

export const socketContext = createContext();

const useSocket = () => {
  return useContext(socketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuth();
  useEffect(() => {
    if (authUser) {
      const newSocket = io("http://localhost:5000", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(newSocket);

      if (newSocket) {
        // Add a conditional check for the socket variable
        newSocket.on("getOnlineUsers", (users) => {
          setOnlineUsers(users);
        });
      }

      return () => newSocket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
 
  return (
    <socketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </socketContext.Provider>
  );
};

export default useSocket;
