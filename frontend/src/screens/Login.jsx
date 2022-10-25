import React from "react";
import KakaoLogin from "../assets/images/login/kakao_login_medium_narrow.png"


const REST_API_KEY = process.env.REACT_APP_REST_API_KEY.replace(/\"/gi, "")
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI.replace(/\"/gi, "")

console.log(REST_API_KEY);
console.log(REDIRECT_URI);

const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function Login(){
    return(
        <a href={KAKAO_AUTH_URI} aria-label="Kakao">
        <img style={{ width : "100%" }} src={KakaoLogin} alt="" />
        </a>
    );
}

export default Login;