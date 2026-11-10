//ui layer is used to handle which ui to show and navigations   
import React from 'react'
import styles from './auth.form.module.scss'
import Login from './login'
import { useNavigate, Link } from 'react-router'
import { UseAuth } from '../hooks/useAuth'
import { useState } from 'react'
const Register = () => {
    const {loading, handleRegister}=UseAuth()
        //now doing two way binding 
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [username, setUsername] = useState("")
    const navigate = useNavigate()
   const submitHandler=async (e)=>{
        e.preventDefault()
        await handleRegister({email,password,username})
        setEmail("") 
        setPassword("")
        setUsername("")
        navigate('/')
    }
  return (
      <main style={{
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#4f4f4f"
        }}>
            <div className={styles['form-container']}>
                <h1>Register</h1>
                <form onSubmit={submitHandler}>
                     <label htmlFor="register-username">Username</label>
                    <input 
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }}
                    type="text" id='register-username' />
                    <label htmlFor="register-email">Email</label>
                    <input
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    type="text" id='register-email' />
                    <label htmlFor="register-pass">Password</label>
                    <input 
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    type="text" id='register-pass'/>
                    <button className='button register-button'>Register</button>
                </form>
                <p style={{fontSize:'15px',padding:'2px'}}>Already have an account? <Link to={'/login'}>Login</Link></p>
            </div>
        </main>
  )
}

export default Register