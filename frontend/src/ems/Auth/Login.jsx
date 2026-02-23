import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const submithandler= (e) => {
        e.preventDefault();
      console.log("form submited")
      handleLogin(email,password)
       setEmail("")
       setPassword("")
   }
  return (
  
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 p-20 rounded-2xl'>
            <form
            onSubmit={(e)=>{
              submithandler(e)
            }} className='flex flex-col items-center justify-center'>

              <input 
                value={email}
              onChange={(e)=>{
              
                setEmail(e.target.value)
              }}
              
              required className="text-red-500 outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-4 text-xl placeholder:text-white"   type='email' placeholder='enter your email'></input>

              <input 
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              
              required className="text-red-500 outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-4 m-3 text-xl placeholder:text-white"  type='password' placeholder='enter your password'></input>

              <button className=" text-white outline-none  border-none bg-emerald-600 rounded-full py-3 px-4 text-xl placeholder:text-white" >Login</button>



            </form>

        </div>
      
    </div>
    
  )
}


export default Login
