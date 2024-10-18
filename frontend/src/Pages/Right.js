import React from 'react'
import ChatUser from '../Components/ChatUser'
import Messages from './Messages'
import Type from '../Components/Type'

const Right = () => {
  return (
    <div className='w-[70%] text-white bg-slate-950'>
      <ChatUser/>
      <Messages/>
      <Type/>
    </div>
  )
}

export default Right
