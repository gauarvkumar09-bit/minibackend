import React, { useState, useEffect } from "react";
import Employeedashboard from "../ems/Dashboard/Employeedashboard";
import Admindashboard from "../ems/Dashboard/Admindashboard";
import { getLocalStorage, setLocalStorage } from "../ems/utils/Localstorage"; 
import { handlerSuccess } from "../utils";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

const App = () => {
 const navigate = useNavigate();
  const logouthandler = (e)=>{
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser');
   
    handlerSuccess('user logout');
    setTimeout(()=>{
      navigate('/login');
    },1000)
  }
  const [showDashboard, setShowDashboard] = useState(null); 

  useEffect(() => {
    setLocalStorage();
  }, []);

  const { employee, admin } = getLocalStorage();

  
  if (showDashboard?.type === "admin") {
    return <Admindashboard changeUser={setShowDashboard} />;
  }

  if (showDashboard?.type === "employee") {
    const empData = employee.find((e) => e.id === showDashboard.id);
    return <Employeedashboard changeUser={setShowDashboard} data={empData} />;
  }

  // Home page buttons
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1 className="text-3xl font-bold">Home Page</h1>
      
      {/* Admin Button */}
      <button
        className="bg-blue-500 px-5 py-2 rounded text-white"
        onClick={() => setShowDashboard({ type: "admin" })}
      >
        Open Admin Dashboard
      </button>

      {/* Employee Buttons */}
      <h2 className="text-xl font-semibold mt-5">Employees</h2>
      <div className="flex flex-col gap-2">
        {employee.map((emp) => (
          <button
            key={emp.id}
            className="bg-green-500 px-5 py-2 rounded text-white"
            onClick={() => setShowDashboard({ type: "employee", id: emp.id })}
          >
            {emp.firstName}
          </button>
        ))}
       
      </div>
       <button
       onClick={logouthandler}
       className="bg-red-500 px-20 py-2 rounded text-white" >logout</button>
       <ToastContainer/>
    </div>
  );
};

export default App;