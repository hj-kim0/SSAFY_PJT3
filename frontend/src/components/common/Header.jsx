import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header(){
    return(
        <header id="header">
            <div id="menu_area">
                <div className="logo">
                    <div className="wrap">
                        <a href="" className="logo_anchor"></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
