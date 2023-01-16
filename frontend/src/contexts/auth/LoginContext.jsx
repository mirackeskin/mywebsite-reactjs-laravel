import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../client';

const LoginContext=createContext();

export const LoginContextProvider=({children})=>{
    const [contextEmail,setContextEmail]=useState("");
    const [contextPassword,setContextPassword]=useState("");
    const [query,setQuery]=useState(false);
    const [contextUser,setContextUser]=useState("");
    
    useEffect(()=>{
        
    },[query])

    const login=async ()=>{
        let result=await axios.post(`${API_URL}/login`,{email:contextEmail,password:contextPassword})
        let user=await result.data;
        localStorage.setItem("user-info",user);
        
    }
    
    return (
        <LoginContext.Provider value={{contextUser,setContextEmail,setContextPassword,setQuery,query,login}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext