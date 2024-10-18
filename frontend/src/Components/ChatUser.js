import React from "react";

const ChatUser = () => {
  return (
    <div className=' p-2 flex space-x-4 bg-gray-800 hover:bg-gray-700 h-[12vh]'>
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-xl'>Ankit Pathak</h1>
        <span className='text-sm'>online</span>
      </div>
    </div>
  );
};

export default ChatUser;
