import React, { useContext, useState } from 'react'
import { AuthContex } from '../contex/AuthProvider'

const Createtast = () => {

  const { userdata, setuserdata } = useContext(AuthContex)

  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  const [asignto, setAsignto] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()

    const newTaskObj = {
      title,
      category,
      date,
      description,
      active: true,
      newTask: true,
      completed: false,
      failed: false
    }

    // get employees
    const employees = JSON.parse(localStorage.getItem('employees')) || []

    // immutable update
    const updatedEmployees = employees.map(emp => {
      if (emp.firstName === asignto) {
        return {
          ...emp,
          // tasks: [...emp.tasks, newTaskObj]
          tasks: [...(emp.tasks || []), newTaskObj]

        }
      }
      return emp
    })

    // save
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))

    // update context
    setuserdata({
      ...userdata,
      employee: updatedEmployees
    })

    // reset
    settitle("")
    setCategory("")
    setDate("")
    setdescription("")
    setAsignto("")
  }



  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
          <div className='flex items-center justify-between bg-[#1c1c1c] p-10'>
           <div className='bg-[#1c1c1c]  text-white w-[40%]' >
          
            
               <h3>Task title</h3>
            <input
            value={title}
            onChange={(e)=>{
                 settitle(e.target.value)
            }}
            type="text" placeholder='enter your task' className='w-full rounded-sm border mb-4' />
         

             <h3>category</h3>
            <input 
            value={category}
            onChange={(e)=>{
                 setCategory(e.target.value)
            }}
            type='text' placeholder='enter category' className='w-full rounded-sm border mb-4' />
           


           
             <h3>Dates</h3>
            <input
            value={date}
            onChange={(e)=>{
                 setDate(e.target.value)
            }}
            type="date" className='w-full rounded-sm border mb-4'/>
           
            

            
                <h3>asign to</h3>
            <input
            value={asignto}
            onChange={(e)=>{
                 setAsignto(e.target.value)
            }}
            type="text" placeholder='employee name' className='w-full rounded-sm border mb-4'/>
            
                    </div>
             <div className='bg-[1c1c1c] w-[40%] text-white rounded-sm  mb-4'>

              
             <h3>decsription</h3>
            <textarea
            value={description}
            onChange={(e)=>{
                 setdescription(e.target.value)
            }}
            name="" className='w-full rounded-sm border mb-4' rows={5} cols={40}></textarea>
           

            <button className='bg-amber-300 rounded-xl w-full px-5 py-2'>creact</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Createtast
