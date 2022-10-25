import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Auth from "../utils/Auth";
import UserInfo from "../screens/UserInfo";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";


function Router() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* user */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/oauth/kakao" element={<Auth/>}></Route>
        <Route path="/userinfo" element={<UserInfo/>}></Route>
        {/* comssa */}
      </Routes>
      <Footer/>    
    </>
  );
}
export default Router;
