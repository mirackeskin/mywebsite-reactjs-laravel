import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];
const columns2 = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'post_title', headerName: 'First name', width: 130 },
  { field: 'post_image', headerName: 'image', width: 130 },
  { field: 'post_cover_text', headerName: 'cover', width: 130 },
  { field: 'post_content', headerName: 'content', width: 130 },
  { field: 'created_at', headerName: 'createat', width: 130 },
  { field: 'updated_at', headerName: 'updateat', width: 130 },
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable(props) {
  const [data,setData]=useState();
    useEffect(()=>{
        try {
          getPosts();
        } catch (error) {
          console.log(error)
        }
        
    },[])
    const getPosts=async()=>{
        const response=await axios.get("http://192.168.1.104:8000/api/getusers")
        const post=await response.data;
        setData(post);
    }
  return (
    <div style={{ height: 400, width: '100%' }}>{console.log(data)}
      {
        data?<DataGrid
        rows={data}
        columns={columns2}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />:
      <h1>Yükleniyor</h1>
      }
    </div>
  );
}