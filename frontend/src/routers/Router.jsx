import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import { useRecoilValue } from 'recoil';
import { themeMode } from "../recoil/themeAtom";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";


function Router() {
  const theme = useRecoilValue(themeMode);
  console.log(theme.theme);
  return (
      <div className={ theme === 0 ? 'light' : 'dark'}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </div>

  );
}
export default Router;
