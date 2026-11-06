import React from 'react'
import styles from './auth.form.module.scss'
import Login from './login'
import { useNavigate, Link } from 'react-router'

const Register = () => {

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
            backgroundColor:"#4f4f4f"
        }}>
            <div className={styles['form-container']}>
                <h1>Register</h1>
                <form onSubmit={submitHandler}>
                     <label htmlFor="register-username">Username</label>
                    <input type="text" id='register-username' />
                    <label htmlFor="register-email">Email</label>
                    <input type="text" id='register-email' />
                    <label htmlFor="register-pass">Password</label>
                    <input type="text" id='register-pass'/>
                    <button className='button register-button'>Register</button>
                </form>
                <p style={{fontSize:'15px',padding:'2px'}}>Already have an account? <Link to={'/login'}>Login</Link></p>
            </div>
        </main>
  )
}

export default Register