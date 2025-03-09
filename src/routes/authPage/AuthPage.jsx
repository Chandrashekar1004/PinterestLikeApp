import "./AuthPage.css"
import React, { useState } from 'react'
import Image from "../../Components/Image/Image";


const AuthPage = () => {
  const [exists,setExists]=useState(true);
  const [error,setError]=useState("");

  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="General/flamingtext_com-173300257.png" alt="" w={36} h={36}/>
        <h1>{!exists ? "Create an account" : "Login to your account"}</h1>
        {/* //if account does not exists */}
        {!exists ? (<form key="register">
          <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" required name="username" id="username" />
          </div>
          <div className="formGroup">
            <label htmlFor="displayName">Display Name</label>
            <input type="displayName" placeholder="Display Name" required name="displayName" id="displayName" />
          </div>
          <div className="formGroup">
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder="Email" required name="Email" id="Email" />
          </div>

          <div className="formGroup">
            <label htmlFor="pwd">Password</label>
            <input type="password" placeholder="password" required name="pwd" id="pwd" />
          </div>

          <button type="submit">Register</button>
          <p>Do you have an account?  
             <b onClick={()=>setExists(true)}>Login</b>
            </p>
          {error && <p className="error">{error}</p>}
        </form>) : 
        // if account exists
        (<form key="login">
          <div className="formGroup">
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder="Email" required name="Email" id="Email" />
          </div>

          <div className="formGroup">
            <label htmlFor="pwd">Password</label>
            <input type="password" placeholder="password" required name="pwd" id="pwd" />
          </div>

          <button type="submit">Login</button>
          <p>Don&apos;t have an account? 
            <b onClick={()=>setExists(false)}>Register</b>
            </p>
          {error && <p className="error">{error}</p>}
        </form>)}
      </div>
      
    </div>
  )
}

export default AuthPage;
