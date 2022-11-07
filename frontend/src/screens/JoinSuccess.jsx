import React from "react";
import Success from "../assets/images/login/CheckBox.png";

export default function JoinSuccess() {
  return (
    <div align="center">
      <div>
        <img src={Success} alt="가입이 완료되었습니다" />
      </div>
      <div>
        <br />
        <br />
        <br />
        <p>회원가입 완료!</p>
        <br />
        <p>추가 정보 입력을 통해</p>
        <p>내 컴퓨터를</p>
        <p>추가할 수 있습니다.</p>
      </div>
    </div>
  );
}
