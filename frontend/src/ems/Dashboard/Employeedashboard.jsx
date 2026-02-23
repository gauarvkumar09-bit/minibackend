import React from 'react'
import Header from '../other/Header'
import Tasklists from '../other/Tasklists'
import TasklistB from '../other/TasklistB'

const Employeedashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
       
          <Header changeUser={props.changeUser} data={props.data} />
          <Tasklists data={props.data}/>
          <TasklistB data={props.data} />
    </div>
  )
}

export default Employeedashboard
