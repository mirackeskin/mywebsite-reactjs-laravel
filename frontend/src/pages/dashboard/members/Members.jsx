import React, { useContext, useEffect } from 'react'
import styles from '../posts/Posts.module.css'
import { Link, Outlet } from 'react-router-dom'
import DataTable from '../../../components/datatable/DataTable'
import { useState } from 'react'
import axios from 'axios'
import { API_URL , IMAGE_URL} from '../../../client'

const Posts = () => {
    const[members,setMembers]=useState([]);
    const [isDelete,setIsDelete]=useState(false);
   useEffect(()=>{
    axios.get(`${API_URL}/members`)
    .then(response=>setMembers(response.data))
    console.log(members)
   },[])

   const handleDelete=(id)=>{
    axios.post(`${API_URL}/deletemember`,{member_id:id})
    .then(response=>setIsDelete(!isDelete))
   }
   useEffect(()=>{
    axios.get(`${API_URL}/members`)
    .then(response=>setMembers(response.data))
   },[isDelete])
    return (
        <div className={styles.mainWrapper}>
            <div className='card bg-dark'>
                <div className='card-header'>
                    <h1 className='text-light'>Members Table</h1>
                </div>
                <div className='card-body'>
                    <div className="table-responsive-md">
                        <table className="table table-dark table-hover table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Email Adress</th>
                                    <th scope="col">Membership Date</th>
                                    <th scope="col">Settings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    members.length>0 ? members.map((member) => (
                                        <tr key={member.member_id}>
                                            <th scope="row">{member.member_id}</th>
                                            <td>{member.member_email}</td>
                                            <td>{member.created_at}</td>
                                            <td>
                                                <Link to="" className='btn btn-light btn-sm me-1'>Send Mail</Link>
                                                <button onClick={()=>handleDelete(member.member_id)} className='btn btn-outline-light btn-sm'>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                        : <tr ><td>No Found Records</td></tr>
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