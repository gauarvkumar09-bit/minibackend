import React, { useContext } from 'react'
import Header from '../other/Header'
import Createtast from '../other/Createtast'
import Alltask from '../other/Alltask'
import { AuthContex } from '../contex/AuthProvider'

const Admindashboard = ({ changeUser }) => {

  const { userdata } = useContext(AuthContex)

  if (!userdata) return <div className="text-white">Loading...</div>

  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={changeUser}/>
      <Createtast />
      <Alltask employees={userdata.employee} />
    </div>
  )
}

export default Admindashboard
