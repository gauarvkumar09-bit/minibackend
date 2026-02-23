import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { handlerError, handlerSuccess } from '../utils';
const Signup = () => {
    const [SignupInfo, setSignupInfo] = useState({
        name:'',
        email:'',
        password:''
    })
    
    const navigate = useNavigate();

    const handlechange =(e)=>{
        const {name,value} = e.target;
        // console.log(name,value);
        const copySignupInfo={...SignupInfo};

        copySignupInfo[name]=value;
        setSignupInfo(copySignupInfo);
    
        // console.log('login obj',loginInfo)
    }

    const submithandler = async (e)=>{
        e.preventDefault();
        const {name,email,password}= SignupInfo;
        if(!name || !email || !password){
            return handlerError("name email and passwore must be fill")
        } 
        try{
            // const url = 'http://localhost:8080/auth/Signup';
            const url = 'http://localhost:8080/auth/signup';
            const response = await fetch(url,{
              method:"POST",
              headers:{
                'Content-type':'application/json'
              },
              body:JSON.stringify(SignupInfo)
            });
          const result = await response.json();
            const {success,message,error}= result;
            if(success){
                handlerSuccess("sign up successfull");
                setTimeout(()=>{
                 navigate('/login')
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
  <h1 className='text-3xl'>Signup</h1>
       
  <form onSubmit={submithandler}>

      <div className=' m-5 flex flex-col'>
        <label name='name'>Name:</label>
        <input
        value={SignupInfo.name}
         onChange={handlechange}
         name='name'
          type='text' placeholder='Enter your name' className='border border-1  shadow-lg shadow-cyan-500/50 rounded-sm px-3 py-1 w-full'></input>
      </div>
      <div className=' m-5 flex flex-col'>
        <label name='email'>Email:</label>
        <input
        value={SignupInfo.email}
         onChange={handlechange}
         name='email' 
         type='email' placeholder='Enter your Email' className='border border-1  shadow-lg shadow-cyan-500/50 rounded-sm px-3 py-1 w-full'></input>
      </div>
      <div className=' m-5 flex flex-col'>
        <label name='password'>Password:</label>
        <input
        value={SignupInfo.password}
         onChange={handlechange}
         name='password'
          type='password' placeholder='Enter your password' className='border border-1  shadow-lg shadow-cyan-500/50 rounded-sm px-3 py-1 w-full'></input>
      </div>

      
      <div className='flex items-center justify-center font-bold'>
      <button type='submit' className='bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-sm px-3 py-1'>Signup</button>
      </div>
      </form>
      <h1>Already have a acount <a href='/login' className='text-red-700'>login</a></h1>

</div>

        
        
        </div>
  )
}

export default Signup