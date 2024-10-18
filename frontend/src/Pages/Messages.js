import React from "react";
import Message from "../Components/Message";

const Messages = () => {
  return (
    <div className='overflow-y-auto py-2' style={{minHeight:'calc(91vh - 12vh)',maxHeight:'calc(91vh - 12vh)',scrollbarWidth:'none'}}>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    </div>
  );
};

export default Messages;
