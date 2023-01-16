import React from 'react'
import styles from './Register.module.css'

const Register = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.formPanel}>
        <form>
        <div className="mb-3">
            <label className="form-label fs-1" style={{color:"#343A40"}}>SignUp Panel</label>
          </div>
          <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" className="form-control" required placeholder='example@gmail.com' aria-describedby="emailHelp"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required placeholder='12das3s568'></input>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register