import React, { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import { Route ,Routes ,Navigate } from 'react-router-dom';
import 'react-toastify/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Refreshhandler from '../Refreshhandler';



const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false)

  const PrivateRoute =({element})=>{
    return isAuthenticated ? element : <Navigate to="/login" />
  }
  
  return (
    <div className='App'>
      <Refreshhandler setIsAuthenticated={setisAuthenticated} />
      <Routes>
         <Route path='/' element = {<Navigate  to="/Login"/> } />
        <Route path='/login' element = {<Login /> }/>
        <Route path='/Signup' element = {<Signup /> }/>
        <Route path='/Home' element = {<PrivateRoute  element={<Home />}/>}/>
      </Routes>

        <ToastContainer/>
    </div>
  )
}

export default App