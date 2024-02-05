import React from "react";
import SideBar from "./SideBar";
import MessageContainer from "./MessageContainer";

const Home = () => {
  return (
    <>
      <div className="flex sm:h-[450px] md:h-[550px]  bg-gray-400 bg-opacity-0 backdrop-blur-md backdrop-filter rounded-lg overflow-hidden">
        <SideBar />
        <MessageContainer />
      </div>
    </>
  );
};

export default Home;
