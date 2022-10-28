import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/common/logo.png";
import user from "../../assets/images/common/user.png";
import note from "../../assets/images/common/note.png";

import "./Header.scss";

function NavBar(){
    return(
		<nav className="header">
          <div className="hamburger">
          <input type="checkbox" className="pr-2" name="toggle-nav"/>
        <label htmlFor="toggle-nav" className="mt-4 pr-2">
          <div className="menu-icon"/>
        </label>
        <section className="side-nav-panel">
          <ul className="top-nav">
            <li><Link to="">장바구니</Link></li>
            <li><Link to="">마이 페이지</Link></li>
            <li className="logout_area"><Link to="">로그아웃</Link></li>
          </ul>
        </section>
          </div>
          <div className="logo">
            <Link to="">
              <img src={logo} alt="" width="100px" height="25px"/>
            </Link>
          </div>
          <div className="gnb">
            <div className="note">
              <Link to="">
                <img src={note} alt="" width="25px" height="25px"/>
              </Link>
            </div>
            <div className="user">
            <Link to="">
                <img src={user} alt="" width="25px" height="25px"/>
              </Link>
            </div>
          </div>
		</nav>
    );

    
}

export default NavBar;