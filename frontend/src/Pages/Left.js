import React from 'react'
import Search from '../Components/Search'
import Users from '../Components/Users'

const Left = () => {
  return (
    <div className='w-[30%] bg-black text-white'>
    <h1 className='font-bold text-3xl px-4'>Chats</h1>
      <Search/>
      <hr />
      <Users/>
    </div>
  )
}

export default Left
