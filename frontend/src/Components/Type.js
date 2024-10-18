import React from 'react'
import { IoSend } from "react-icons/io5";


const Type = () => {
  return (
    <div className='flex space-x-3 h-[9vh] text-center items-center bg-gray-800 p-2'>
    <div className='w-[70%] mx-4'>
     <input type="text" placeholder="Type here" className="grow outline-none border-[1px] border-gray-700 bg-slate-800 rounded-xl flex items-center gap-0  px-3 py-2  w-full   " />
    </div>
    <button className='button button-primary text-3xl'>
        <IoSend/>
     </button>
     </div>
  )
}
 
export default Type
