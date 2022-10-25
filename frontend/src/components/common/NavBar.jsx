import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./NavBar.scss";

function NavBar(){
    return(
		<Navbar className="bg-black p-4">
        <Container>
          <Row>
          <Col xs={3}>
          <input type="checkbox" className="mt-4 pr-2" name="toggle-nav"/>
        <label htmlFor="toggle-nav" className="mt-4 pr-2">
          <div className="menu-icon"/>
        </label>
        <section className="side-nav-panel">
          <ul className="top-nav">
            <li><Link to="">장바구니</Link></li>
            <li><Link to="">마이 페이지</Link></li>
          </ul>
          <button className="dark-mode-button" aria-label="dark mode toggle">
            <span aria-hidden="true" className="dark-toggle">
              <span className="DTspan"/>
            </span>
          </button>
          <div className="logout_area">
            <span><Link to="">로그아웃</Link></span>
          </div>
        </section>
          </Col>
          <Col xs={3}>2</Col>
          <Col xs={3}>3</Col>
          <Col xs={3}>4</Col>
          </Row>
        </Container>
        <Link to="">
          <img src={logo} alt="" width="100px" height="25px"/>
        </Link>
        <section class="social-nav social-nav_header">
        </section>
		</Navbar>
    );

    
}

export default NavBar;