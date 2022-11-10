import { color, fontWeight } from "@mui/system";
import React from "react";
import Success from "../assets/images/login/CheckBox.png";

export default function JoinSuccess() {
  return (
    <div align="center">
      <div
        style={{
          borderStyle: "solid",
          borderTopWidth: "100px",
          borderBottomWidth: "50px",
          borderColor: "#ffffff",
        }}
      >
        <img
          src={Success}
          alt="가입이 완료되었습니다"
          height="100px"
          width="100px"
        />
      </div>
      <div
        style={{
          borderStyle: "solid",
          borderBottomWidth: "50px",
          borderColor: "#ffffff",
        }}
      >
        <p style={{ fontSize: "40px", fontWeight: "bold" }}>회원가입 완료!</p>
      </div>
      <div
        style={{
          borderStyle: "solid",
          borderBottomWidth: "100px",
          borderColor: "#ffffff",
        }}
      >
        <p style={{ fontSize: "16px", fontWeight: "100", color: "#808080" }}>
          추가 정보 입력을 통해
          <br />
          내 컴퓨터를
          <br />
          추가할 수 있습니다.
          <br />
        </p>
      </div>
    </div>
  );
}
