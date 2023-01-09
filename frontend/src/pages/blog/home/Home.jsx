import React from 'react'
import PostCard from '../../../components/postcard/PostCard'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className='row'>
        <div className='col-md-12 mt-5'>
            <h1 className={styles.title}>Blog Yazılarım..</h1>
        </div>
        <div className='col-md-12 col-lg-6 mt-4 mb-2'>
            <PostCard></PostCard>
        </div>
        <div className='col-md-12 col-lg-6 mt-4 mb-2'>
            <PostCard></PostCard>
        </div>
        
    </div>
  )
}

export default Home
