import React from 'react'
import { loginApi } from "../Services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useForm } from "react-hook-form"
import { setAuth } from '../Slices/UserSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

  const dispatch = useDispatch();
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const navigate = useNavigate()
    
      const onSubmit = async(data) =>{
        console.log(data);  
        try{
            const res = await axios.post(loginApi,data,{
              withCredentials: true, // Send the cookie along with the request
          });
            console.log(res);
            toast.success(res.data.message);
            dispatch(setAuth(res.data.user))

            localStorage.setItem('userDetails',JSON.stringify(res.data.user))
           
            navigate('/')
            
        }
        catch(err){
            console.log(err,'erorr-------------------------------------');
            toast.error(err.response.data.message);
        }

        
      }



  return (
    <>
         <div className='flex h-screen items-center justify-center'>
      <form action="" className='border border-black px-8 py-4 rounded-md w-96' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-2xl text-blue-600 font-bold'>Messenger</h1>
        <h2 className='text-2xl items-center'>Login with your <span className='text-blue-600 font-semibold'>Account</span> </h2>
        
        <div className='py-4 space-y-3'>
       
         <div>
         <p>Email</p>
         <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })}/>
          </label>
          {errors.email && <span className='text-red-600 text-sm font-semibold'>**This field is required**</span>}
         </div>
        
        <div>
        <p>Password</p>
          <label className="input input-bordered flex items-center gap-2">
            <input type="password" className="grow" placeholder="password" {...register("password", { required: true })} />
          </label>
          {errors.password && <span className='text-red-600 text-sm font-semibold'>**This field is required**</span>}

        </div>
          <div  className='flex justify-center' >
          
          <input type="submit" className='text-white bg-blue-600 w-full cursor-pointer rounded-lg p-2' value='Login' />
          </div>
          
        </div>
        <Link to='/signup'>
        <p>Don't have an Account?<span className='text-blue-500 underline'>{""} signup</span></p>
        </Link>
      </form>
      <ToastContainer/>
    </div>
    </>
  )
}

export default Login
