import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import styles from '../../create/Create.module.css'
import { API_URL } from '../../../../client';

const Edit = () => {
    const {id}=useParams();
    const [file,setFile]=useState(null);
    const [title,setTitle]=useState("");
    const [coverText,setCoverText]=useState("");
    const [content,setContent]=useState("");
    const [formValues,setFormValues]=useState({post_title:"",post_cover_text:"",post_content:""});
    const [success,setSuccess]=useState(true);

    const Navigation=useNavigate();

    const submitHandle=(e)=>{
      e.preventDefault();
      const formData=new FormData();
      formData.append("id",id);
      formData.append("image",file);
      formData.append("post_title",title);
      formData.append("post_content",content);
      formData.append("post_cover_text",coverText);

      const config={
        headers:{"content-type":"multipart/form-data"}
      }     

      axios.post(`${API_URL}/update`,formData,config)
      .then((response)=>response.data?Navigation("/dashboard/posts"):setSuccess(false))
      .catch(()=>setSuccess(false))     
      
    }
    useEffect(()=>{
      setSuccess(true);
      axios.post(`${API_URL}/post`,{id:id})
      .then(response=>{
        setTitle(response.data[0].post_title);
        setContent(response.data[0].post_content);
        setCoverText(response.data[0].post_cover_text);
      })
      //setFormValues(response.data[0])
    },[])
  return (
    <div className={styles.mainWrapper}>
      <div className='card bg-dark'>
        <div className='card-header'>
          <h1 className='text-light'>Edit Post</h1>
        </div>
        <div className='card-body'>
          <form onSubmit={submitHandle}>
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
              <input className="form-control" onChange={(e)=>setFile(e.target.files[0])} required type="file" name="file" />
            </div>
            {success==false ? <div style={{color:"red"}}>Update has unsuccessfull!</div> : null}
            <button type="submit" className="btn btn-outline-light btn-sm">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit
