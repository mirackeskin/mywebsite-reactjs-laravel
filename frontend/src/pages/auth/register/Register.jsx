import React from 'react'
import styles from './Register.module.css'

const Register = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.formPanel}>
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fs-1" style={{color:"#343A40"}}>SignUp Panel</label>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" required placeholder='example@gmail.com' aria-describedby="emailHelp"></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" required placeholder='12das3s568'></input>
          </div>
          <button type="submit" class="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register