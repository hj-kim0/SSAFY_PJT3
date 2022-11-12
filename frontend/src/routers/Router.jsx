import React, { Component } from "react";
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

import ItemDetail from "../components/detail/ItemDetail";

import "./Router.scss";
import AutoManual from "../screens/AutoManual";

class Router extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  loadCurrentlyLoggedInUser() {
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });

      console.log("로그인 유저 셋 스테이트 : ");
      console.log(this.state);
      
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }


  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("로그아웃 했습니다.");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render(){

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
            <AppHeader data={this.state} 
            handleLogout={this.handleLogout}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
export default Router;
