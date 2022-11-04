import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Compare from "../screens/Compare";
import Auth from "../utils/Auth";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import ItemDetail from "../components/detail/ItemDetail";

import "./Router.scss";
import OutoManual from "../screens/OutoManual";

function Router() {
  return (
    <>
      <div id='wrapper'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* user */}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/oauth/kakao' element={<Auth />}></Route>
          {/* comssa */}
          <Route path='/compare' element={<Compare />}></Route>
          <Route path='/money' element={<OutoManual />}></Route>
          <Route path='/detail:id' element={<ItemDetail />}></Route>
        </Routes>
        <div id='nav_wrapper'>{/* <Header /> */}</div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default Router;
