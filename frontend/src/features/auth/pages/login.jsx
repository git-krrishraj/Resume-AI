 import React from 'react'
 
 const Login = () => {
   return (
    <main style={{
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgb(71, 69, 69)"
    }}>
        <div className="form-container">
            <h1>Login</h1>
            <form>
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