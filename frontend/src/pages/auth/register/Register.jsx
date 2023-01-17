import React, { useState } from 'react'
import styles from './Register.module.css'
import {Link,useNavigate} from 'react-router-dom'
import { API_URL , IMAGE_URL} from '../../../client'
import axios from 'axios'

const Register = () => {
  const [email,setEmail]=useState("");
  const[success,setSuccess]=useState(false);
  const submitHandle=(e)=>{
    e.preventDefault();
    axios.post(`${API_URL}/createmember`,{member_email:email})
    .then(response=>response.data==1 ? setSuccess(true) : alert("Subscribe is unsuccess!"))
    setEmail("");
  }
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.formPanel}>
        <form onSubmit={submitHandle}>
          <div className="mb-3">
            <label className="form-label fs-1" style={{color:"#343A40"}}>SignUp Panel</label>
          </div>
          <div className="mb-3">
            <label className="form-label fs-6" style={{color:"#343A40"}}>Kayıt olarak güncel postlar hakkında <br></br> bildirim alabilirsiniz...</label>
          </div>
          <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" required placeholder='example@gmail.com'></input>
          </div>
          {
            success ?
              <div className="mb-3">
                <label className="form-label fs-6" style={{ color: "green" }}>Subscribe is success!</label>
              </div>
              : null
          }
          <button type="submit" className="btn btn-dark btn-sm">SignUp</button>
          <Link to="/blog" className='btn btn-outline-dark btn-sm ms-1'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Register