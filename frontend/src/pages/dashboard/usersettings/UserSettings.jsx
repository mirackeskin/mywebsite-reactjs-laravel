import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import styles from './UserSettings.module.css'
import { API_URL } from '../../../client'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const UserSettings = () => {
  const [userId,setUserId]=useState("");
  const [userName,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const Navigation=useNavigate();

  useEffect(()=>{
    axios.get(`${API_URL}/getuser`)
    .then(response=>{
      setUserId(response.data[0].user_id);
      setUserName(response.data[0].username);
      setEmail(response.data[0].email);
      setPassword(response.data[0].password);
    })
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("user_id",userId);
    formData.append("username",userName);
    formData.append("email",email);
    formData.append("password",password);
    axios.post(`${API_URL}/updateuser`,formData)
    .then(response=>Navigation("/dashboard/home"))
  }
  return (
    <div className={styles.mainWrapper}>
      <div className='card bg-dark'>
        <div className='card-header'>
          <h1 className='text-light'>User Settings</h1>
        </div>
        <div className='card-body'>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="mb-3">
              <label className="form-label text-light">User Name</label>
              <input type="text" onChange={(e)=>setUserName(e.target.value)} value={userName} className="form-control"></input>
            </div>
            <div className="mb-3">
              <label className="form-label text-light">E-mail Adress</label>
              <input className="form-control" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Post Content</label>
              <input className="form-control" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            </div>
            <button type="submit" className="btn btn-outline-light btn-sm">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserSettings
