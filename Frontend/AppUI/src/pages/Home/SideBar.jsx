import React from "react";
import Conversations from "../../Components/SideBar/Conversations";
import LogoutButton from "../../Components/SideBar/LogoutButton";
import SearchInput from "../../Components/Sidebar/SearchInput";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col border-r border-slate-500 p-2">
        <SearchInput />
        <div className="divider p-0"></div>
        <Conversations />
        <LogoutButton />
      </div>
    </>
  );
};

export default SideBar;
