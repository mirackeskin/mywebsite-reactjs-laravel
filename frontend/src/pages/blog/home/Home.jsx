import React, { useEffect } from 'react'
import PostCard from '../../../components/postcard/PostCard'
import styles from './Home.module.css'

import axios from 'axios'
import { API_URL } from "../../../client"
import { useState } from 'react';
import { Vortex } from 'react-loader-spinner'

const Home = () => {
  const [posts, setPosts] = useState({});
  
  useEffect(() => {
    axios.get(`${API_URL}/posts`)
      .then(response => setPosts(response.data))
  }, [])
  return (
    <div className='row'>
      <div className='col-md-12 mt-5'>
        <h1 className={styles.title}>Blog Yazılarım..</h1>
      </div>
      {
        posts.length > 0 ? posts.map((post) => (
          <div key={post.id} className='col-md-12 col-lg-6 mt-4 mb-2'>
            <PostCard id={post.id} title={post.post_title} image={post.post_image} coverText={post.post_cover_text} text={post.post_content} date={post.updated_at.split("T")[0]}></PostCard>
          </div>
        )) : <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
        </div>
      }
    </div>
  )
}

export default Home
