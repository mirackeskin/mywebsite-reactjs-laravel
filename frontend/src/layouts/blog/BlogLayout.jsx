import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import styles from '../blog/BlogLayout.module.css'
import { FaLaravel,FaHtml5,FaCss3Alt,FaBootstrap,FaJs,FaReact,FaPhp,FaGithub,FaNpm,FaPython } from 'react-icons/fa';
import { TbBrandReactNative } from "react-icons/tb";
import { DiCodeigniter,DiJqueryLogo,DiFirebase} from "react-icons/di";
import { SiCsharp,SiArduino,SiUnity,SiMysql} from "react-icons/si";
import { useState } from 'react';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../client';



const BlogLayout = () => {
  const [saw,setSaw]=useState({});
  const [profile,setProfile]=useState({});
  useEffect(()=>{
    getProfile();
    getSaw();
    
  },[])
  const getSaw=async ()=>{
    const response=await axios.get(`${API_URL}/saw`);
    const sawData=await response.data[0];
    setSaw(sawData);
  }  
  const getProfile=async ()=>{
    const response=await axios.get(`${API_URL}/coverpage`);
    const profileData=response.data[0];
    setProfile(profileData);
  }
  return (
    <div className={styles.mainWrapper}>
      <Navbar></Navbar>
      <div className='container'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div id={styles.id} className='col-md-8'>
            <Outlet></Outlet>
          </div>
          <div id={styles.right} className='d-none d-sm-none d-md-block col-md-3 mt-5'>
            <div className={styles.sidebarContainer}>
              
              <div className={styles.profileContainer}>
                <div className={styles.imageContainer}>
                  {profile.image_url!=undefined?<img className={styles.img} src={IMAGE_URL+profile.image_url} alt=""/>:null}
                </div>
                <div className={styles.textContainer}>
                  <h2>{profile.cover_name}</h2>
                  <h3>{profile.cover_job}</h3>
                </div>
              </div>

              <div className={styles.skillContainer}>
                <h2>Skills</h2>
                <div className={styles.iconContainer}>
                <a href="https://www.w3schools.com/html/"><FaHtml5 className={styles.icon}></FaHtml5></a>
                <a href="https://www.w3schools.com/css/"><FaCss3Alt className={styles.icon}></FaCss3Alt></a>
                <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"><FaBootstrap className={styles.icon}></FaBootstrap></a>
                <a href="https://www.javascript.com/"><FaJs className={styles.icon}></FaJs></a>
                <a href="https://www.javascript.com/"><DiJqueryLogo className={styles.icon}></DiJqueryLogo></a>
                <a href="https://reactjs.org/"><FaReact className={styles.icon}></FaReact></a>
                <a href="https://reactnative.dev/"><TbBrandReactNative className={styles.icon}></TbBrandReactNative></a>
                <a href="https://www.php.net/"><FaPhp className={styles.icon}></FaPhp></a>
                <a href="https://laravel.com/"><FaLaravel className={styles.icon}></FaLaravel></a>
                <a href="https://www.codeigniter.com/"><DiCodeigniter className={styles.icon}></DiCodeigniter></a>
                <a href="https://github.com/"><FaGithub className={styles.icon}></FaGithub></a>
                <a href="https://www.npmjs.com/"><FaNpm className={styles.icon}></FaNpm></a>
                <a href="https://www.python.org/"><FaPython className={styles.icon}></FaPython></a>
                <a href="https://learn.microsoft.com/en-us/dotnet/csharp/"><SiCsharp className={styles.icon}></SiCsharp></a>
                <a href="https://www.arduino.cc/"><SiArduino className={styles.icon}></SiArduino></a>
                <a href="https://unity.com/"><SiUnity className={styles.icon}></SiUnity></a>
                <a href="https://www.mysql.com/"><SiMysql className={styles.icon}></SiMysql></a>
                <a href="https://firebase.google.com/"><DiFirebase className={styles.icon}></DiFirebase></a>
                </div> 
              </div>

              <div className={styles.sawContainer}>
                <h2>Words of the Day!</h2>
                <h5>{saw.saw}</h5>
                <h6>{saw.writer}</h6>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogLayout