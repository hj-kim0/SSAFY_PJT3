import { display, margin, textAlign } from "@mui/system";
import React from "react";
import Logo from "../assets/images/common/logo.png";
import KakaoLogin from "../assets/images/login/kakao_login_medium_narrow.png";

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY.replace(/\"/gi, "");
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI.replace(/\"/gi, "");

const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default function Login() {
  return (
    <div align="center">
      <div
        style={{
          borderStyle: "solid",
          borderColor: "#ffffff",
          borderWidth: "150px",
        }}
      >
        <img
          height="250px"
          width="400px"
          border={{
            width: "300px",
            color: "white",
            style: "solid",
          }}
          src={Logo}
          style={{ backgroundColor: "#023047" }}
          alt="컴싸에 오신 것을 환영합니다"
        />
      </div>
      <div>
        <br />
        <br />
        <br />
        <a href={KAKAO_AUTH_URI} aria-label="Kakao">
          <img
            style={{
              width: "400px",
              height: "75px",
            }}
            src={KakaoLogin}
            alt="본 사이트는 카카오 로그인만을 지원하고 있습니다"
          />
        </a>
      </div>
    </div>
  );
}
