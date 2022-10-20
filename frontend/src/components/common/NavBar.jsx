import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./NavBar.scss";

function NavBar(){
    return(
        <Navbar className="bg-dark p-4">
			<div></div>
            <input type="checkbox" name="toggle-nav"/>
            <label htmlFor="toggle-nav">
				<span className="menu-icon"></span>
			</label>
            <section className="side-nav-panel">
            <ul className="top-nav">
                    <li><Link to="">Home</Link></li>
					<li className="parent-item"><Link to="#">About</Link>
						<ul className="submenu">
							<li><Link to="#">Leif</Link></li>
							<li><Link to="#">Coding</Link></li>
						</ul>
					</li>
					<li className="parent-item"><Link to="#">Projects</Link>
						<ul className="submenu">
							<li><Link to="#">Websites</Link></li>
						</ul>
					</li>
					<li><Link to="#">Contact</Link></li>
				</ul>

                <button className="dark-mode-button" aria-label="dark mode toggle">
					<span aria-hidden="true" className="dark-toggle">
							<span className="DTspan"></span>
					</span>
				</button>
            </section>
			<Link to="#">
				<img src={logo} alt="" width="200px" height="50px"></img>
			</Link>
			<section class="social-nav social-nav_header">
			<img src="#" alt=""></img>
			<img src="#" alt=""></img>
			</section>
        </Navbar>
    );

    
}

export default NavBar;