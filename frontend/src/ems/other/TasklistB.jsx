import React from 'react'
import AcceptTasklist from '../tasklist/AcceptTasklist'
import Faildtask from '../tasklist/Faildtask'
import Completestak from '../tasklist/Completestak'

const TasklistB = ({ data }) => {

  if (!data || !data.tasks) return null
  

  return (
    <div id="TasklistB"
      className='flex h-[50%] overflow-x-auto w-full bg-red-400 mt-10 gap-10 items-center justify-start flex-nowrap p-5'>

      {data.tasks.map((t, index) => {

        if (t.active) {
          return <AcceptTasklist key={index} data={t} />
        }

        if (t.failed) {
          return <Faildtask key={index} data={t} />
        }

        if (t.completed) {
          return <Completestak key={index} data={t} />
        }

        return null
      })}

    </div>
  )
}

export default TasklistB
