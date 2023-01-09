import React from 'react'
import { useState } from 'react'
import styles from './Login.module.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    /*const response = axios.post("http://192.168.1.104:8000/api/auth",{username:username,password:password})
    .then(response=>console.log(response));*/
    navigate("/dashboard");
  }
  
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.formPanel}>
        <form onSubmit={handleSubmit} method="post">
        <div className="mb-3">
            <label className="form-label fs-1" style={{color:"#343A40"}}>Sign In Panel</label>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="text" className="form-control" onChange={(e)=>setUserName(e.target.value)} value={username} required placeholder='example@gmail.com' aria-describedby="emailHelp"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} required placeholder='12das3s568'></input>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login