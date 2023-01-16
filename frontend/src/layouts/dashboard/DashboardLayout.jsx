import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './DashboardLayout.module.css'
import {Link} from 'react-router-dom'
import {FaHome,FaListAlt,FaPlusSquare,FaUsers,FaUser,FaIdCard} from 'react-icons/fa';

const DashboardLayout = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    localStorage.removeItem("user-info");
    navigate("/blog");

  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navbar}>
        <h3 className={styles.userName}>Welcome Miraç Keskin</h3>
        <button className="btn btn-outline-light btn-sm m-2" onClick={handleClick}>LogOut</button>
      </div>

      <div className={styles.body}>
        <div className={styles.sideBar}>
          <ul>
            <Link className={styles.link} to="/dashboard"><li className={styles.li}><FaHome className={styles.icon}></FaHome><span className={styles.span}>Home</span></li></Link>
            <Link className={styles.link} to="posts"><li className={styles.li}><FaListAlt className={styles.icon}></FaListAlt><span className={styles.span}>Posts</span></li></Link>
            <Link className={styles.link} to="create"><li className={styles.li}><FaPlusSquare className={styles.icon}></FaPlusSquare><span className={styles.span}>Create Post</span></li></Link>
            <Link className={styles.link} to="cover"><li className={styles.li}><FaIdCard className={styles.icon}></FaIdCard><span className={styles.span}>Cover Page</span></li></Link>
            <Link className={styles.link} to="members"><li className={styles.li}><FaUsers className={styles.icon}></FaUsers><span className={styles.span}>Members</span></li></Link>
            <Link className={styles.link} to="usersettings"><li className={styles.li}><FaUser className={styles.icon}></FaUser><span className={styles.span}>User Settings</span></li></Link>
          </ul>
        </div>
        <div className={styles.dashboardContainer}>
            <Outlet></Outlet>
        </div>
      </div>

    </div>
  )
}

export default DashboardLayout


/*<h1>DashboardLayout</h1>
      <button onClick={handleClick}>logout</button>*/