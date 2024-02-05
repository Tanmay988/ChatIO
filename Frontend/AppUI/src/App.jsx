import React from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
export default function App() {
  return (
    <>
      <div className="p-5 flex items-center justify-center h-screen">
        {/* <Login /> */}
        {/* <Signup /> */}
        <Home />
      </div>
    </>
  );
}
