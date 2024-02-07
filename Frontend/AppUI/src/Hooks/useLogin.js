import React from "react";
import { useAuth } from "../Context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const { setAuthUser } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const loginFunction = async ({ username, password }) => {
    setLoading(true);

    const success = errorHandling({ username, password });
    if (!success) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (response.ok) {
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, loginFunction };
};

export default useLogin;

function errorHandling({ username, password }) {
  if (!username || !password) {
    toast.error("Please enter required fields");
    return false;
  }
  return true;
}
