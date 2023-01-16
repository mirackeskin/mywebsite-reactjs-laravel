import React from 'react'
import {Routes,Route} from "react-router-dom"
import MainLayout from "../layouts/main/MainLayout";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import AuthLayout from "../layouts/auth/AuthLayout";
import BlogLayout from "../layouts/blog/BlogLayout"
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register"
import Home from "../pages/blog/home/Home";
import Posts from "../pages/dashboard/posts/Posts"
import Create from "../pages/dashboard/create/Create"
import Cover from "../pages/dashboard/cover/Cover"
import Members from "../pages/dashboard/members/Members"
import UserSettings from "../pages/dashboard/usersettings/UserSettings"
import DashboardHome from "../pages/dashboard/usersettings/UserSettings"
import Edit from '../pages/dashboard/posts/edit/Edit';



const Navigations = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}></Route>
        <Route path="/blog" element={<BlogLayout></BlogLayout>}>
          <Route path="/blog" element={<Home></Home>}></Route>
        </Route>
        <Route path="/auth" element={<AuthLayout></AuthLayout>}>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
        </Route>
        <Route path="/dashboard" element={<DashboardLayout></DashboardLayout>}>
          <Route path="home" element={<DashboardHome></DashboardHome>}></Route>
          <Route path="posts" element={<Posts></Posts>}></Route>
          <Route path="create" element={<Create></Create>}></Route>
          <Route path="cover" element={<Cover></Cover>}></Route>
          <Route path="members" element={<Members></Members>}></Route>
          <Route path="usersettings" element={<UserSettings></UserSettings>}></Route>
          
          <Route path='edit/:id' element={<Edit></Edit>}></Route>
        </Route>
    </Routes>
  )
}

export default Navigations
