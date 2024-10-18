import React from 'react'
import { IoSearch } from "react-icons/io5";


const Search = () => {
  return (
    <div className='px-6 py-2 h-[10vh]'>
      <form action="" className='flex space-x-2 items-center'>
        <label className="border-[1px] border-gray-700 bg-slate-800 rounded-lg flex items-center gap-1 w-[80%] px-3 h-[36px]">
        <input type="text" className="grow outline-none bg-slate-800 w-[100%]" placeholder="Search" />
        </label>
        <button>
            {" "}
            <IoSearch  className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300'/>
        </button>
      </form>
    </div>
  )
}

export default Search
