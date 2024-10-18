import React,{useEffect, useState} from 'react'
import User from './User'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'

const Users = () => {

  const [users,setUsers] = useState([]);

  const user  = useSelector((state) => state.UserSlice);
  console.log(user)
  const token = Cookies.get('jwt')
  console.log(token,'token-----')


  const getUsers=async()=>{
    try{
      const res = await axios.get('http://localhost:4002/user/get-users',{
        Credentials:'include',
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      
      setUsers(res.data.users)
    }
    catch(err){
      console.log(err,'error while getting users')
    }
  }

  useEffect(()=>{
    getUsers();
  },[])




  return (
   <div style={{maxHeight:'calc(83vh)',minHeight:'calc(83vh)',scrollbarWidth:'none'}} className='py-2 flex-seea overflow-y-auto'>
    {
      users.map((item,idx)=>(
        <>
        <User user = {item}/>
        </>
      ))
    }
   
   </div>
  )
}

export default Users
