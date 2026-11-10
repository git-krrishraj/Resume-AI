import {useContext} from 'react';
import {AuthContext} from '../services/auth.context.jsx'
import {login,register,logout,getMe} from '../services/auth.api.js'

export const UseAuth= ()=>{
    //importing context
    const context = useContext(AuthContext)
    const {user,setUser,loading,setLoading}=context

    const handleLogin=async ({email,password})=>{
    try {
        setLoading(true)
        const data=await login({email,password})
        setUser(data.user)
    } 
    catch(err){

    }finally {
        setLoading(false)
    }
    }

    const handleRegister =async ({email,username,password})=>{
        try{
            setLoading(true)
            const data= await register({email,username,password})
            setUser(data.user)
            setLoading(false)
        }catch(error){
          
        }finally{
            setLoading(false)
        }
    }

    const handleLogout = async ()=>{
        try{
            setLoading(true)
            const data = await logout()
            setUser(null)
        }
        catch(err)
        {

        }
        finally{
            setLoading(false)
        }
    }
    //exporting the context values and functions to be used in other components
    return {user,loading,handleLogin,handleLogout,handleRegister}
}