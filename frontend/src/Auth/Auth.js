import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Auth = ({children}) => {

    const {user} = useSelector((state)=>state.UserSlice)
    console.log(user,'xcgvhbjn')
    const navigate = useNavigate()

    useEffect(()=>{
        if(user.id == ''){
          
            navigate('/login')
        }
       
    },[])

  return (

    <div>
      {children}
    </div>
  )
}

export default Auth
