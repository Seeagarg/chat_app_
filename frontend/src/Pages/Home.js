import React from 'react'
import Left from './Left'
import Right from './Right'
import Logout from './Logout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'


const Home = () => {
  
  const token = Cookies.get('jwt1')
  console.log(token,'cvghbjk');

  return (
    <div className='flex h-screen max-h-[100vh]'>
    <Logout/>
     <Left/>
     <Right/>
     <ToastContainer/>
    </div>
  )
}

export default Home
