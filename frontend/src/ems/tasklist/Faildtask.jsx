import React from 'react'

const Faildtask = ({data}) => {
  return (
    <div className='  flex-shrink-0 h-full w-[300px] p-5 bg-blue-700 rounded-xl '>
         <div className='flex justify-between items-center'>
             <h3 className='bg-red-700 px-3 py-1 rounded'>{data?.category}</h3>
          <h2 className='text-sm'>{data?.date}</h2>
         </div>
         <h2 className='text-2xl'>{data?.title}</h2>
         <p>{data?.description}

         </p>
        <div className=''>
            <button className='w-full bg-red-400 py-1 px-2 text-sm rounded-sm'>
                failed
            </button>

        </div>
                </div>
  )
}

export default Faildtask
