import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.scss';
import logo from "../../assets/images/common/logo.png";

function AppHeader() {

    const state = useState(props.state);
    console.log(state);
    

    return (
            <header className="app-header header">
                <div className="container">
                <div className="hamburger">
                    <input type="checkbox" className="chb pr-2" name="toggle-nav"/>
                    <label htmlFor="toggle-nav" className="chb mt-4 pr-2">
                        <div className="menu-icon chb"/>
                    </label>
                    <section className="side-nav-panel">
                        <ul className="top-nav">
                            <li><Link to="/money">자동 견적</Link></li>
                            { this.props.authenticated ? (<>
                            <li><Link to="/Compare">비교</Link></li>
                            <li><Link to="/">내 견적</Link></li>
                            <li><Link to="/">내 설정</Link></li>
                            <li><Link to="/detail:10">물품 상세</Link></li>
                            <li className="logout_area"><Link to={props.handleLogout}>로그아웃</Link></li></>) 
                            : 
                            (
                                <>
                                <li><Link to="/login">로그인</Link></li>
                                </>
                            ) }
                        </ul>
                    </section>
                </div>
                    <div className="app-branding mt-3">
                    <Link to="/"><img src={logo} alt="" width="100px" height="25px"/></Link>
                    </div>
                    <div className="app-navigator">
                        <nav className="app-nav">
                            <ul>
                                <li><Link to="/">자동 견적</Link></li>
                                { this.props.authenticated ? (
                                    <>
                                    <li><Link to="/">견적 비교</Link></li>
                                    <li><Link to="/">내 견적</Link></li>
                                    <li><Link to="/">부품 검색</Link></li>
                                    </>
                                ):(<></>) 
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/profile">마이페이지</NavLink>
                                        </li>
                                        <li>
                                            <a onClick={props.handleLogout}>로그아웃</a>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        <li><NavLink to="/login">로그인</NavLink></li>
                                    </ul>
                                )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }

export default AppHeader;