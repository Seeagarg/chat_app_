import React from 'react'

const User = ({user}) => {


  console.log(user,'user')

  return (
    <>
       <div className='flex space-x-2 items-center px-6 py-3 hover:bg-slate-700 duration-300 cursor-pointer'>
    <div className="avatar online">
  <div className="w-14 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>

<div>
    <h1 className='font-bold'>{user?.fullName}</h1>
    <span>{user?.email}</span>
</div>
    </div>
    </>
  )
}

export default User
