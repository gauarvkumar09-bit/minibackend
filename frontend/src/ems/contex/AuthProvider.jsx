import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/Localstorage'

export const AuthContex = createContext()

const AuthProvider = ({ children }) => {

 
  const [userdata, setuserdata] = useState(null)
  // localStorage.clear()

  useEffect(() => {
    setLocalStorage()
    const data = getLocalStorage()
    setuserdata(data)
  }, [])

  return (
    <AuthContex.Provider value={{ userdata, setuserdata }}>
      {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider
