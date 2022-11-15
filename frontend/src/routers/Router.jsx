import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
//
import Home from "../screens/Home";
import Login from "../screens/user/login/Login";
import Profile from "../screens/user/profile/Profile";
//
import { getCurrentUser } from "../utils/APIUtils";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import OAuth2RedirectHandler from "../screens/user/oauth2/OAuth2RedirectHandler";
import Alert from "react-s-alert";

import AppHeader from "../components/common/AppHeader";
import Footer from "../components/common/Footer";

import Compare from "../screens/Compare";
import Estimate from "../screens/Estimate";
import Search from "../screens/Search";
import Guide from "../screens/Guide";

import "./Router.scss";
import AutoManual from "../screens/AutoManual";
import Loading from "../components/effect/Loading";

function Router() {
  const [loading, setLoading] = useState(true);

  const [state, setState] = useState({
    authenticated: false,
    currentUser: null,
  });

  function loadCurrentlyLoggedInUser() {
    getCurrentUser()
      .then((response) => {
        setState({
          authenticated: true,
          currentUser: response,
        });
        setLoading(false);
      })
      .catch((err) => {
        setState({
          authenticated: false,
          currentUser: null,
        });
        setLoading(false);
      });
  }

  function handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);

    setState({
      authenticated: false,
      currentUser: null,
    });

    setLoading(false);
    Alert.success("로그아웃 했습니다.");
  }

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, []);

  return (
    <>
      <div id="wrapper">
        {loading ? <Loading /> : null}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* user */}
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/oauth2/redirect"
            element={<OAuth2RedirectHandler />}
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
          {/* comssa */}
          <Route path="/compare" element={<Compare />}></Route>
          <Route path="/auto" element={<AutoManual />}></Route>
          <Route path="/estimate" element={<Estimate />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/guide" element={<Guide />}></Route>
        </Routes>
        <div id="nav_wrapper">
          <AppHeader data={state} handleLogout={handleLogout} />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Router;
