import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import styles from './Login.module.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import LoginContext from '../../../contexts/auth/LoginContext';
import { API_URL } from '../../../client';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault();
    let result=await axios.post(`${API_URL}/login`,{email,password})
    let user=await result.data;
    localStorage.setItem("user-info",user);
    if(user){
      navigate("/dashboard");
    }else{
      alert("hatalı kullanıcı adı yada şifre");
    }
  }

  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      navigate("/dashboard");
    }
    console.log(localStorage.getItem("user-info"))
  },[])
  
  
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.formPanel}>
        <form onSubmit={handleSubmit} method="post">
        <div className="mb-3">
            <label className="form-label fs-1" style={{color:"#343A40"}}>Sign In Panel</label>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder='example@gmail.com' aria-describedby="emailHelp"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password}  placeholder='12das3s568'></input>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login