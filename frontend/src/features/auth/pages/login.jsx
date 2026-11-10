 import React from 'react'
 import styles from './auth.form.module.scss'
 import Register from './register'
 import { useNavigate, Link } from 'react-router'
 import { UseAuth } from '../hooks/useAuth'
 import { useState } from 'react'
 
 const Login = () => {
    const {loading, handleLogin}=UseAuth()
    //now doing two way binding 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const submitHandler=async (e)=>{
        e.preventDefault()
        await handleLogin({email,password})
        setEmail("") 
        setPassword("")
        navigate('/')
    }

    if(loading)
    {
        return <div>Loading....</div>
    }

   return (
    <main style={{
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgb(244, 210, 242)"
    }}>
        <div className={styles['form-container']}>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="login-email">Email</label>
                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }} 
                type="text" id='login-email' name='email' />
                <label htmlFor="login-pass">Password</label>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} 
                type="text" id='login-pass' name='password'/>
                <button className='button login-button'>Login</button>
            </form>
            <p style={{fontSize:'15px',padding:'2px'}}>Don't have an account? <Link to={'/register'}>Register</Link></p>
        </div>
    </main>
   )
 }
 
 export default Login