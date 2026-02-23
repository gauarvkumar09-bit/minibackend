import React, { useContext } from 'react'
import { AuthContex } from '../contex/AuthProvider'

const Alltask = () => {

  const { userdata } = useContext(AuthContex)

  if (!userdata) return null

  return (
    <div id='TasklistB' className='bg-[#1c1c1c] p-5 rounded mt-10 h-[30%]'>

      {/* header */}
      <div className='bg-red-400 py-2 px-4 flex justify-between mb-3'>
        <h2 className='w-1/5'>Employee</h2>
        <h3 className='w-1/5'>Total Tasks</h3>
        <h5 className='w-1/5'>Active</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>

      {/* rows */}
      <div className='h-[80%] overflow-auto'>
        {userdata.employee.map((emp, index) => {

          const active = emp.tasks.filter(t => t.active).length
          const completed = emp.tasks.filter(t => t.completed).length
          const failed = emp.tasks.filter(t => t.failed).length

          return (
            <div key={index} className='bg-gray-700 py-2 px-4 flex justify-between mb-3 text-white'>

              <h2 className='w-1/5'>{emp.firstName}</h2>
              <h3 className='w-1/5'>{emp.tasks.length}</h3>
              <h5 className='w-1/5'>{active}</h5>
              <h5 className='w-1/5'>{completed}</h5>
              <h5 className='w-1/5'>{failed}</h5>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Alltask
