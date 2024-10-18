import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { clearData } from '../Slices/UserSlice';
import { useNavigate } from 'react-router-dom';



const Logout = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()


  const handleClick=(e)=>{
    e.preventDefault()
    try{
      localStorage.removeItem(('userDetails'));
      dispatch(clearData());
      navigate('/login')
      
      
    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <div className='w-[4%] text-white bg-slate-950 p-2 flex flex-col justify-end'>
    {/* LogOut */}
    <form action="" className='flex space-x-2 items-center'>
        <button  onClick={handleClick}>
            {" "}
            <TbLogout2  className='text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300'/>
        </button>
      </form>
  </div>
  )
}

export default Logout
