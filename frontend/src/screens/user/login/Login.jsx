import React, { Component } from 'react';
import './Login.scss';
import { NAVER_AUTH_URL ,KAKAO_AUTH_URL } from '../../../constants';
import { Navigate } from 'react-router-dom'
import kakaoLogo from '../../../assets/images/login/kakao-logo.png';
import naverLogo from '../../../assets/images/login/naver-logo.png';
class Login extends Component {
    
    render() {
        if(this.props.authenticated) {
            return <Navigate
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title notoBold">Sign In</h1>
                    <SocialLogin />
                    <div className="or-separator">
                    </div>
                </div>
            </div>
        );
    }
}

class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn kakao notoBold" href={KAKAO_AUTH_URL}>
                    <img src={kakaoLogo} alt="Kakao" /> 카카오로 로그인</a>
                <a className="btn btn-block social-btn naver notoBold" href={NAVER_AUTH_URL}>
                    <img src={naverLogo} alt="Naver" /> 네이버로 로그인</a>

            </div>
        );
    }
}


export default Login
