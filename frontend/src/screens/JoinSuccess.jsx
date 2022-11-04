import React from "react";
import Success from "../assets/images/login/CheckBox.png";
import Styles from "../screens/JoinSuccess.css";

export default function JoinSuccess() {
  return (
    <div className={Styles.CssAlign}>
      <div className={Styles.SuccessCheck}>
        <img src={Success} alt="가입이 완료되었습니다" />
      </div>
      <div className={Styles.SuccessText}>
        <p>회원가입 완료!</p>
      </div>
      <div className={Styles.SuccessMessage}>
        <p>추가 정보 입력을 통해</p>
        <p>내 컴퓨터를</p>
        <p>추가할 수 있습니다.</p>
      </div>
    </div>
  );
}
