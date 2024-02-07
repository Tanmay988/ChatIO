import React from "react";
import { useAuth } from "../Context/AuthContext";

function useLogout() {
  const { setAuthUser } = useAuth();

  const logout = async () => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    localStorage.removeItem("chat-user");
    setAuthUser(null);
  };
  return { logout };
}

export default useLogout;
