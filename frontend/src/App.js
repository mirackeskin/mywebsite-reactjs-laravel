import React from "react"
import {Routes,Route} from "react-router-dom"
import '../src/App.css'
import MainLayout from "./layouts/main/MainLayout";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import AuthLayout from "./layouts/auth/AuthLayout";
import BlogLayout from "./layouts/blog/BlogLayout"
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register"
import Home from "./pages/blog/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}></Route>
        <Route path="/blog" element={<BlogLayout></BlogLayout>}>
          <Route path="/blog" element={<Home></Home>}></Route>
        </Route>
        <Route path="/auth" element={<AuthLayout></AuthLayout>}>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
        </Route>
        <Route path="/dashboard" element={<DashboardLayout></DashboardLayout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
