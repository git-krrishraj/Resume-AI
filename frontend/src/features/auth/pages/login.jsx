 import React from 'react'
 import styles from './auth.form.module.scss'
 const Login = () => {
   return (
    <main style={{
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgb(71, 69, 69)"
    }}>
        <div className={styles['form-container']}>
            <h1>Login</h1>
            <form className={styles['form-container-form']}>
                <label htmlFor="login-email">Email</label>
                <input type="text" id='login-email' />
                <label htmlFor="login-pass">Password</label>
                <input type="text" id='login-pass'/>
            </form>
        </div>
    </main>
   )
 }
 
 export default Login