import React from "react";
import Success from "../assets/images/login/CheckBox.png";
import wrapper from "../screens/JoinSuccess.css";

function JoinSuccess() {
  <>
    <div style={wrapper}>
      <img
        style={{
          width: "100%",
          display: "block",
          margin: "auto",
        }}
        src={Success}
        alt="가입이 완료되었습니다"
      />
    </div>
  </>;
}

export default JoinSuccess;
