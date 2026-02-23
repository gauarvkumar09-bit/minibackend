import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { handlerError, handlerSuccess } from '../utils';
const Login = () => {
    const [loginInfo, setloginInfo] = useState({
        
        email:'',
        password:''
    })
    
    const navigate = useNavigate();

    const handlechange =(e)=>{
        const {name,value} = e.target;
        // console.log(name,value);
        const copyloginInfo={...loginInfo};

        copyloginInfo[name]=value;
        setloginInfo(copyloginInfo);
    
        // console.log('login obj',loginInfo)
    }

    const submithandler = async (e)=>{
        e.preventDefault();
        const {email,password}= loginInfo;
        if( !email || !password){
            return handlerError("name email and passwore must be fill")
        } 
        try{
            // const url = 'http://localhost:8080/auth/Signup';
            const url = 'http://localhost:8080/auth/login';
            const response = await fetch(url,{
              method:"POST",
              headers:{
                'Content-type':'application/json'
              },
              body:JSON.stringify(loginInfo)
            });
          const result = await response.json();
            const {success,message,error,jwtToken,name}= result;
            if(success){
                handlerSuccess(message);
                localStorage.setItem('token',jwtToken);
                 localStorage.setItem('loggedInUser',name);
                setTimeout(()=>{
                 navigate('/home')
                },1000)
            } else if(error){
              const details =error?.details[0].message;
              handlerError(details)
            } else if (!success){
              handlerError(message);

            }
            console.log(result);

        }catch(err){
            handlerError(err);
        }
    }
  
    
  return (
    <div className='flex justify-center items-center w-full h-screen bg-zinc-800'>
  <div className=' flex flex-col w-[18rem] lg:w-[25rem] h-auto bg-linear-to-bl from-violet-500 to-fuchsia-500 border border-1  shadow-lg shadow-cyan-500/50 justify-center items-center rounded-xl py-5 px-4'>
  <h1 className='text-3xl'>Login</h1>
       
  <form onSubmit={submithandler}>

      
      <div className=' m-5 flex flex-col'>
        <label name='email'>Email:</label>
        <input
        value={loginInfo.email}
         onChange={handlechange}
         name='email' 
         type='email' placeholder='Enter your Email' className='border border-1  shadow-lg shadow-cyan-500/50 rounded-sm px-3 py-1 w-full'></input>
      </div>
      <div className=' m-5 flex flex-col'>
        <label name='password'>Password:</label>
        <input
        value={loginInfo.password}
         onChange={handlechange}
         name='password'
          type='password' placeholder='Enter your password' className='border border-1  shadow-lg shadow-cyan-500/50 rounded-sm px-3 py-1 w-full'></input>
      </div>

      
      <div className='flex items-center justify-center font-bold'>
      <button type='submit' className='bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-sm px-3 py-1'>Login</button>
      </div>
      </form>
      <h1>don't have a acount <a href='/Signup' className='text-red-700'>Signup</a></h1>

</div>

        
        
        </div>
  )
}

export default Login