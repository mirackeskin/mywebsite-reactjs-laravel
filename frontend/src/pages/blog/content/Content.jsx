import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { API_URL, IMAGE_URL } from '../../../client';

const Content = (props) => {
  const location = useLocation();
  const {title,image,coverText,text,date}=location.state;
    
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 col-lg-12  mt-4 mb-2'>
          <img style={{width:"100%",height:"auto"}} src={IMAGE_URL+image} alt="" />
        </div>
        <div className='col-md-12 mt-5'>
          <h1>{title}</h1>
        </div>
        <div className='col-md-12 col-lg-12 mt-4 mb-2'>
          <p style={{fontSize:"17px"}}>&nbsp;&nbsp;&nbsp;{coverText}</p>
          <br />
          <p style={{fontSize:"17px"}}>&nbsp;&nbsp;&nbsp;{text}</p>
          <br /><br />
          <p style={{fontSize:"18px",fontWeight:600}}>Write Date: {date}</p>
        </div>
      </div>
    </div>
  )
}

export default Content
