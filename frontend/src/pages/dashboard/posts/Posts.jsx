import React, { useContext, useEffect } from 'react'
import styles from './Posts.module.css'
import { Link, Outlet } from 'react-router-dom'
import DataTable from '../../../components/datatable/DataTable'
import { useState } from 'react'
import axios from 'axios'
import { API_URL , IMAGE_URL} from '../../../client'

const Posts = () => {
    const [posts,setPosts]=useState();
    const [isDelete,setIsDelete]=useState(true);

    useEffect(()=>{
        getPosts();
        
    },[])
    const getPosts=async()=>{
        const response=await axios.get(`${API_URL}/posts`);
        const posts=await response.data;
        setPosts(posts);
    }
    const handleDelete=(id)=>{
        axios.post(`${API_URL}/delete`,{id:id})
        .then(()=>setIsDelete(!isDelete));
        
    }
    useEffect(()=>{
        getPosts();
    },[isDelete])
    return (
        <div className={styles.mainWrapper}>
            <div className='card bg-dark'>
                <div className='card-header'>
                    <h1 className='text-light'>Post Lists Table</h1>
                </div>
                <div className='card-body'>
                    <div className="table-responsive-md">
                        <table className="table table-dark table-hover table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Settings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts ? posts.map((post) => (
                                        <tr key={post.id}>
                                            <th scope="row">{post.id}</th>
                                            <td>{post.post_title}</td>
                                            <td>{post.created_at}</td>
                                            <td><img style={{ width: "40px", height: "40px" }} src={`${IMAGE_URL}/${post.post_image}`} alt="" /></td>
                                            <td>
                                                <Link to={`/dashboard/edit/${post.id}`} className='btn btn-warning btn-sm me-1'>Edit</Link>
                                                <button onClick={()=>handleDelete(post.id)} className='btn btn-danger btn-sm'>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                        : null
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts