import React, { useEffect } from 'react'
import styles from './Cover.module.css'
import { API_URL } from '../../../client'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Cover = () => {
  const Navigation=useNavigate();
  const [id,setId]=useState(null);
  const [file,setFile]=useState(null);
  const [coverJob,setCoverJob]=useState("");
  const [coverName,setCoverName]=useState("");
  const [coverText,setCoverText]=useState("");
  const [githubUrl,setGithubUrl]=useState("");
  const [instagramUrl,setInstagramUrl]=useState("");
  const [linkedinUrl,setLinkedinUrl]=useState("");
  const [playUrl,setPlayUrl]=useState("");
  const [twitterUrl,setTwitterUrl]=useState("");

  useEffect(()=>{
    axios.get(`${API_URL}/coverpage`)
    .then(response=>{
      setId(response.data[0].cover_id)
      setCoverJob(response.data[0].cover_job);
      setCoverName(response.data[0].cover_name);
      setCoverText(response.data[0].cover_text);
      setGithubUrl(response.data[0].github_url);
      setInstagramUrl(response.data[0].instagram_url);
      setLinkedinUrl(response.data[0].linkedin_url);
      setPlayUrl(response.data[0].play_url);
      setTwitterUrl(response.data[0].twitter_url);
    })
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("cover_id",id);
    formData.append("cover_job",coverJob);
    formData.append("cover_name",coverName);
    formData.append("cover_text",coverText);
    formData.append("github_url",githubUrl);
    formData.append("instagram_url",instagramUrl);
    formData.append("linkedin_url",linkedinUrl);
    formData.append("play_url",playUrl);
    formData.append("twitter_url",twitterUrl);
    formData.append("image",file);
    const config={
      headers:{"content-type":"multipart/form-data"}
    }
    axios.post(`${API_URL}/updatecover`,formData,config)
    .then(response=>Navigation("/dashboard"))
    .catch((err)=>alert(err))
  }
  return (
    <div className={styles.mainWrapper}>
      <div className='card bg-dark'>
        <div className='card-header'>
          <h1>Cover Page</h1>
        </div>
        <div className='card-body'>
          <form onSubmit={handleSubmit} className={styles.form}>
            
            <div className={styles.formBox2}>
              <div className="mb-3">
                <label className="form-label text-light">Linkedin Url</label>
                <input type="text" onChange={e=>setLinkedinUrl(e.target.value)} value={linkedinUrl} className="form-control" required></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">GitHub Url</label>
                <input type="text" onChange={e=>setGithubUrl(e.target.value)} value={githubUrl} className="form-control" required></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Twitter Url</label>
                <input type="text" onChange={e=>setTwitterUrl(e.target.value)} value={twitterUrl} className="form-control" required></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Instagram Url</label>
                <input type="text" onChange={e=>setInstagramUrl(e.target.value)} value={instagramUrl} className="form-control" required></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">GooglePlay Url</label>
                <input type="text" onChange={e=>setPlayUrl(e.target.value)} value={playUrl} className="form-control" required></input>
              </div>
            </div>
            <div className={styles.formBox1}>
              <div className="mb-3">
                <label className="form-label text-light">Cover Image</label>
                <input className="form-control" onChange={e=>setFile(e.target.files[0])} type="file" name="file" required></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Cover Name</label>
                <input type="text" onChange={e=>setCoverName(e.target.value)} value={coverName} className="form-control" required></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Cover Job</label>
                <input type="text" onChange={e=>setCoverJob(e.target.value)} value={coverJob} className="form-control" required></input>
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Cover Text</label>
                <input type="text" onChange={e=>setCoverText(e.target.value)} value={coverText} className="form-control" required></input>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-outline-light btn-sm w-100" required>Update</button>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cover
