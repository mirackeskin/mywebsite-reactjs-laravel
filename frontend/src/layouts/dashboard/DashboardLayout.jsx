import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardLayout = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/blog");
  }
  return (
    <div>
      <h1>DashboardLayout</h1>
      <button onClick={handleClick}>logout</button>
    </div>
  )
}

export default DashboardLayout
