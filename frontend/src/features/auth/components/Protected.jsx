import { UseAuth } from "../hooks/useAuth"
import { Navigate } from "react-router"
import React from 'react'

const Protected = ({children}) => {
    const {user,loading}=UseAuth()

    if(loading)
    {
        return (
            <div>Loading....</div>
        )
    }

    if(!user)
    {
       return <Navigate to="/login" replace />
    }   

  return (
        children
  )
}

export default Protected