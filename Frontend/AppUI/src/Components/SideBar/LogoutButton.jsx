import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../Hooks/useLogout";

const LogoutButton = () => {
  const { logout } = useLogout();
  return (
    <>
      <div className="mt-auto">
        <RiLogoutBoxLine
          onClick={logout}
          className=" w-8 h-8 m-2 text-gray-300 hover:text-slate-100"
        />
      </div>
    </>
  );
};

export default LogoutButton;
