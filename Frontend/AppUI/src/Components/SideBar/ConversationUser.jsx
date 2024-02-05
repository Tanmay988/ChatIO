import React from "react";

const ConversationUser = () => {
  return (
    <>
      <div className="flex gap-4  p-2 items-center  hover:bg-sky-400 cursor-pointer">
        <div>
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-gray-300 font-semibold">Full name</h3>
        </div>
      </div>
      <div className="divider p-0 m-0 h-1 "></div>
    </>
  );
};

export default ConversationUser;
