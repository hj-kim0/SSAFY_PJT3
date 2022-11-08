import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import JoinSuccess from "../screens/JoinSuccess";
import UserInfo from "../screens/UserInfo";
import Compare from "../screens/Compare";
import Auth from "../utils/Auth";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import ItemDetail from "../components/detail/ItemDetail";

import "./Router.scss";
import AutoManual from "../screens/AutoManual";

function Router() {
  return (
    <>
      <div id="wrapper">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* user */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/oauth/kakao" element={<Auth />}></Route>
          <Route path="/joinsuccess" element={<JoinSuccess />}></Route>
          <Route path="/userinfo" element={<UserInfo />}></Route>
          {/* comssa */}
          <Route path='/compare' element={<Compare />}></Route>
          <Route path='/money' element={<AutoManual />}></Route>
          <Route path='/detail:id' element={<ItemDetail />}></Route>
        </Routes>
        <div id="nav_wrapper">
          <Header />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Router;
