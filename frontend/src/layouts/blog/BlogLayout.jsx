import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import styles from '../blog/BlogLayout.module.css'
import { FaLaravel,FaHtml5,FaCss3Alt,FaBootstrap,FaJs,FaReact,FaPhp,FaGithub,FaNpm } from 'react-icons/fa';
import { TbBrandReactNative } from "react-icons/tb";
import { DiCodeigniter } from "react-icons/di";

const BlogLayout = () => {
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
                  <img className={styles.img} src="https://pbs.twimg.com/profile_images/1467933827792310278/XnKsL8YK_400x400.jpg" alt="" />
                </div>
                <div className={styles.textContainer}>
                  <h2>Miraç Keskin</h2>
                  <h3>Software Engineer</h3>
                </div>
              </div>

              <div className={styles.skillContainer}>
                <h2>Skills</h2>
                <div className={styles.iconContainer}>
                <a href="https://www.w3schools.com/html/"><FaHtml5 className={styles.icon}></FaHtml5></a>
                <a href="https://www.w3schools.com/css/"><FaCss3Alt className={styles.icon}></FaCss3Alt></a>
                <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"><FaBootstrap className={styles.icon}></FaBootstrap></a>
                <a href="https://www.javascript.com/"><FaJs className={styles.icon}></FaJs></a>
                <a href="https://reactjs.org/"><FaReact className={styles.icon}></FaReact></a>
                <a href="https://reactnative.dev/"><TbBrandReactNative className={styles.icon}></TbBrandReactNative></a>
                <a href="https://www.php.net/"><FaPhp className={styles.icon}></FaPhp></a>
                <a href="https://laravel.com/"><FaLaravel className={styles.icon}></FaLaravel></a>
                <a href="https://www.codeigniter.com/"><DiCodeigniter className={styles.icon}></DiCodeigniter></a>
                <a href="https://github.com/"><FaGithub className={styles.icon}></FaGithub></a>
                <a href="https://www.npmjs.com/"><FaNpm className={styles.icon}></FaNpm></a>
                </div> 
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogLayout