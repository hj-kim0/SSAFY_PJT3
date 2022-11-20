import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.scss';
import logo from "../../assets/images/common/logo.png";

function AppHeader(props) {


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
                            <li><Link to="/auto">자동 견적</Link></li>
                            <li><Link to="/compare">견적 비교</Link></li>
                            <li><Link to="/estimate">내 견적</Link></li>
                            <li><Link to="/guide">가이드</Link></li>
                            { props.data.authenticated ? (<>
                                <li className="logout_area"><a onClick={props.handleLogout}>로그아웃</a></li>
                            </>)
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
                                <li><Link to="/auto">자동 견적</Link></li>
                                <li><Link to="/compare">견적 비교</Link></li>
                                <li><Link to="/estimate">내 견적</Link></li>
                                <li><Link to="/guide">가이드</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { props.data.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/profile"><div className="box"><img className="profile" src={props.data.currentUser.information.imageUrl}/></div></NavLink>
                                        </li>
                                        <li>
                                            <a className="dec" onClick={props.handleLogout}>로그아웃</a>
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