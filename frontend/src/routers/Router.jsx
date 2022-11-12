import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
//
import Home from "../screens/Home";
import Login from "../screens/user/login/Login";
//
import { getCurrentUser } from "../utils/APIUtils";
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import OAuth2RedirectHandler from '../screens/user/oauth2/OAuth2RedirectHandler';
import Alert from 'react-s-alert';

import AppHeader from "../components/common/AppHeader";
import Footer from "../components/common/Footer";

import Compare from "../screens/Compare";

import "./Router.scss";
import AutoManual from "../screens/AutoManual";

function Router() {

  const [state, setState] = useState(
    {
      authenticated: false,
      currentUser: null,
      loading: true
    }
  );
  
  function loadCurrentlyLoggedInUser() {
    getCurrentUser()
    .then(
      response => {
        setState({
          authenticated: true,
          currentUser: response,
          loading: false
        });
      }).catch(err => {
        setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      });
  }

  function handleLogout() {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);

      setState({
        authenticated: false,
        currentUser: null
      });
      Alert.success("로그아웃 했습니다.")
  }

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  },[]);

    return (
      <>
        <div id="wrapper">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* user */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler/>}></Route>  
            {/* comssa */}
            <Route path='/compare' element={<Compare />}></Route>
            <Route path='/money' element={<AutoManual />}></Route>
          </Routes>
          <div id="nav_wrapper">
            <AppHeader data={state} 
            handleLogout={handleLogout}
            />
          </div>
          <Footer />
        </div>
      </>
    );

}
export default Router;
