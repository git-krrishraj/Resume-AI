 import React from 'react'
 import styles from './auth.form.module.scss'
 import Register from './register'
 import { useNavigate, Link } from 'react-router'
 const Login = () => {
    const navigate = useNavigate()
    const submitHandler=(e)=>{
        e.preventDefault()
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
                <input type="text" id='login-email' />
                <label htmlFor="login-pass">Password</label>
                <input type="text" id='login-pass'/>
                <button className='button login-button'>Login</button>
            </form>
            <p style={{fontSize:'15px',padding:'2px'}}>Don't have an account? <Link to={'/register'}>Register</Link></p>
        </div>
    </main>
   )
 }
 
 export default Login