import React from 'react'
import styles from './Create.module.css'
import axios from 'axios'
import { useState } from 'react'
import { API_URL } from '../../../client'
import {Navigate, useNavigate} from 'react-router-dom'

const Create = () => {
  const [file,setFile]=useState(null);
  const [title,setTitle]=useState("");
  const [coverText,setCoverText]=useState("");
  const [content,setContent]=useState("");
  const Navigation=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("image",file);
    formData.append("post_title",title);
    formData.append("post_content",content);
    formData.append("post_cover_text",coverText);
    const config={
      headers:{"content-type":"multipart/form-data"}
    }
    axios.post(`${API_URL}/create`,formData,config)
    .then(response=>{Navigation("/dashboard/posts")})
    .catch((err)=>alert(err))
  }

  return (
    <div className={styles.mainWrapper}>
      <div className='card bg-dark'>
        <div className='card-header'>
          <h1 className='text-light'>Create Post</h1>
        </div>
        <div className='card-body'>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="mb-3">
              <label className="form-label text-light">Post Title</label>
              <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control"></input>
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Post Cover Text</label>
              <textarea className="form-control" onChange={(e)=>setCoverText(e.target.value)} value={coverText} rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Post Content</label>
              <textarea className="form-control" onChange={(e)=>setContent(e.target.value)} value={content} rows="7"></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Post Image</label>
              <input className="form-control" type="file" onChange={(e)=>setFile(e.target.files[0])} name="file" />
            </div>
            <button type="submit" className="btn btn-outline-light btn-sm">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
