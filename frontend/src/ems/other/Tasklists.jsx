import React from 'react'

const Tasklists = ({ data }) => {

  if (!data || !data.tasks) return null

  const newTask = data.tasks.filter(t => t.newTask).length
  const active = data.tasks.filter(t => t.active).length
  const completed = data.tasks.filter(t => t.completed).length
  const failed = data.tasks.filter(t => t.failed).length

  return (
    <div className='flex mt-10 justify-between gap-5 flex-wrap'>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
        <h1 className='text-3xl font-semibold'>{newTask}</h1>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
        <h1 className='text-3xl font-semibold'>{completed}</h1>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
        <h1 className='text-3xl font-semibold'>{failed}</h1>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
        <h1 className='text-3xl font-semibold'>{active}</h1>
        <h3 className='text-xl font-medium'>Active</h3>
      </div>

    </div>
  )
}

export default Tasklists
