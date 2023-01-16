import React from 'react'
import styles from './Cover.module.css'

const Cover = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className='card bg-dark'>
        <div className='card-header'>
          <h1>Cover Page</h1>
        </div>
        <div className='card-body'>
          <form className={styles.form}>
            
            <div className={styles.formBox2}>
              <div className="mb-3">
                <label className="form-label text-light">Linkedin Url</label>
                <input type="email" className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">GitHub Url</label>
                <input type="email" className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Twitter Url</label>
                <input type="email" className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Instagram Url</label>
                <input type="email" className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">GooglePlay Url</label>
                <input type="email" className="form-control"></input>
              </div>
            </div>
            <div className={styles.formBox1}>
              <div className="mb-3">
                <label className="form-label text-light">Cover Image</label>
                <input className="form-control" type="file" name="file" />
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Cover Name</label>
                <input type="email" className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Cover Job</label>
                <input type="email" className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Cover Text</label>
                <input type="email" className="form-control"></input>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cover
