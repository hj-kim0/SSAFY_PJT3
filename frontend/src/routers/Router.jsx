import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Compare from "../screens/Compare";
import Auth from "../utils/Auth";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import MoneyUse from "../components/outo_manual/MoneyUse";
import ItemDetail from "../components/detail/ItemDetail";

import "./Router.scss";

function Router() {
  return (
    <>
    <div id="wrapper">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* user */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/oauth/kakao" element={<Auth/>}></Route>
        {/* comssa */}
        <Route path="/compare" element={<Compare/>}></Route>
        <Route path="/money" element={<MoneyUse/>}></Route>
        <Route path="/detail:id" element={<ItemDetail/>}></Route>
      </Routes>
      <div id ="nav_wrapper">
      <Header/>
      </div>
      <Footer/>
    </div>    
    </>
  );
}
export default Router;
