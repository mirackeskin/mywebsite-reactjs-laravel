import React from 'react'
import styles from '../main/MainLayout.module.css'
import {FaLinkedin,FaTwitter,FaGithub,FaInstagram,FaBlogger,FaGooglePlay} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainLayout = () => {
    
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftBox}>
        <div className={styles.imageBox}>
          <img src="https://pbs.twimg.com/profile_images/1467933827792310278/XnKsL8YK_400x400.jpg" alt="" />
        </div>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.textContainers}>
          <p className={styles.nameText}>MİRAÇ KESKİN</p>
          <p className={styles.jobText}>Software Engineer</p>
          <p className={styles.aboutText}>I am a person who loves coding, research and technology.</p>
        </div>
        <div className={styles.iconContainers}>
          <a href="https://www.linkedin.com/in/mirackeskin/"><FaLinkedin className={styles.icon}></FaLinkedin></a>
          <a href='https://github.com/mirackeskin'><FaGithub className={styles.icon}></FaGithub></a>
          <a href='https://twitter.com/mirakeskin'><FaTwitter className={styles.icon}></FaTwitter></a>
          <a href='https://www.instagram.com/mirac_keskinn/'><FaInstagram className={styles.icon}></FaInstagram></a>
          <a href='https://play.google.com/store/apps/developer?id=Mirac+Keskin'><FaGooglePlay className={styles.icon}></FaGooglePlay></a>
          <Link to={"/blog"}><FaBlogger className={styles.icon}></FaBlogger></Link>          
        </div>
      </div>
    </div>
  )
}

export default MainLayout

