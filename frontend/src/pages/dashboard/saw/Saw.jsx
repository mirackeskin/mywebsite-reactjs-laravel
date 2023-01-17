import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import styles from '../usersettings/UserSettings.module.css'
import { API_URL } from '../../../client'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Saw = () => {
    const [id,setId]=useState("");
    const [word,setWord]=useState("");
    const [writer,setWriter]=useState("");
    const Navigation=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/updatesaw`,{saw_id:id,word:word,writer:writer})
        .then(response=>response.data ? Navigation("/dashboard") : alert("error"))
    }
    useEffect(()=>{
        axios.get(`${API_URL}/saw`)
        .then(response=>{
            setId(response.data[0].saw_id);
            setWord(response.data[0].saw);
            setWriter(response.data[0].writer);
        })
    },[])
    return (
        <div className={styles.mainWrapper}>
            <div className='card bg-dark'>
                <div className='card-header'>
                    <h1 className='text-light'>Words Of The Day!</h1>
                </div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <textarea type="text" onChange={(e)=>setWord(e.target.value)} value={word} className="form-control" placeholder='words..' rows={3} required></textarea>
                        </div>
                        <div className="mb-3">
                            <input type="text" onChange={(e)=>setWriter(e.target.value)} value={writer} className="form-control" placeholder='Mustafa Kemal Atatürk' required></input>
                        </div>
                        <button type="submit" className="btn btn-outline-light btn-sm">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Saw
