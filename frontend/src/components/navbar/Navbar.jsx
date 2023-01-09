import React from 'react'
import styles from '../navbar/Navbar.module.css'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <h1>MİRAÇ <span>KESKİN</span></h1>
        <div className={styles.buttonContainer}>
            <Link to="/auth/register" className='btn btn-dark btn-sm rounded-pill '>Sign Up</Link>
            <Link to="/auth/login" className='btn  btn-sm'>Sign In</Link>
        </div>
    </div>
  )
}

export default Navbar
