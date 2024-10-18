import React from "react";
import { useForm } from "react-hook-form"
import axios from 'axios';
import { signupApi } from "../Services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from "../Slices/UserSlice";


const SignUp = () => {

  const user = useSelector((state)=>state.UserSlice)

  const dispatch = useDispatch()

  // console.log(user,'user')

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
            const res = await axios.post(signupApi,data);
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

      const password = watch('password','')

      const confirmPassword = watch('confirmPassword','')

      const validatePasswordMatch=(value)=>{
        return value === password || "password and confirmPassword don't match"
      }


  return (
    <div className='flex h-screen items-center justify-center'>
      <form action="" className='border border-black px-8 py-4 rounded-md w-96' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-2xl text-blue-600 font-bold'>Messenger</h1>
        <h2 className='text-2xl items-center'>Create a new <span className='text-blue-600 font-semibold'>Account</span> </h2>
        
        <div className='py-4 space-y-3'>
        <div>
        <p className='mb-0'>UserName</p>
        <label className="input input-bordered flex items-center mt-0">
            <input type="text" className="grow mt-0" placeholder="Username" {...register("fullName", { required: true })} />
          </label>
          {errors.fullName && <span className='text-red-600 text-sm font-semibold'>**This field is required**</span>}
          </div>
          <div>
          <p className='mb-0'>Email</p>
          <label className="input input-bordered flex items-center mt-0 ">
            <input type="text" className="grow mt-0" placeholder="Email" {...register("email", { required: true })}  />
           
          </label>
          {errors.email && <span  className='text-red-600 text-sm font-semibold'>**This field is required**</span>}
          </div>
        <div>
          <p className='mb-0'>Password</p>
          <label className="input input-bordered flex items-center mt-0 ">
            <input type="password" className="grow mt-0" placeholder="password" {...register("password", { required: true })} />
            
          </label>
          {errors.password && <span  className='text-red-600 text-sm font-semibold'>**This field is required**</span>}
          </div>
          <div>
          <p className='mb-0'>Confirm Password</p>
          <label className="input input-bordered flex items-center mt-0 ">
            <input type="password" className="grow mt-0" placeholder="confirm password" {...register("confirmPassword", { required: true,validate:validatePasswordMatch })}  />
          </label>
          {errors.confirmPassword && <span  className='text-red-600 text-sm font-semibold'>**{errors.confirmPassword.message}**</span>}
        </div>
          <div  className='flex justify-center' >
          
          <input type="submit" className='text-white bg-blue-600 w-full cursor-pointer rounded-lg p-2' value='Sign Up' />
          </div>
          
        </div>
       <Link to='/login'>
       <p>Have any Account?<span className='text-blue-500 underline'>{""} Login</span></p>
       </Link>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default SignUp;
