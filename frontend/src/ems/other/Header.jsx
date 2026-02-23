import React from 'react'

const Header = ({ data, changeUser }) => {

  function logout(){
    localStorage.removeItem('loggedInUser')
    changeUser('')   
  }

  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl flex items-center justify-center'>
         <br />
        <span className='text-3xl font-semibold mb-3 '> 
       
       {data?.firstName || data?.name || "Admin"}

         
        
        </span>
      </h1>

      <button
        onClick={logout}
        className='bg-red-600 text-white font-bold rounded-sm py-2 px-6'>
        Log Out
      </button>
    </div>
  )
}

export default Header
