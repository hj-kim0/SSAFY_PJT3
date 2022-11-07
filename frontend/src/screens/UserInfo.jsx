import { Checkbox } from "@mui/material";
import React from "react";
import ComAdd from "../assets/images/login/Add.png";
import ComDelete from "../assets/images/login/Delete.png";

export default function UserInfo() {
  return (
    <div style={{ display: "block", margin: "auto" }}>
      <div>회원정보 수정</div>
      <div>이 곳에 프로필 사진이 들어갑니다</div>
      <div>닉네임</div>
      <div>
        <div>이곳에 텍스트를 입력합니다.</div>
        <div>한글, 대소문자, 숫자만 입력할 수 있습니다.</div>
        <div>
          <button>중복확인</button>
        </div>
        <div>
          <div>내 컴퓨터</div>
          <div>추가 버튼을 활성화 하는 공간입니다.</div>
          <div>설정한 내 컴퓨터를 저장하는 공간입니다.</div>
          <div>내 컴퓨터 #1 - 무한히 증가합니다.</div>
          <div>
            <Checkbox>작성 완료</Checkbox>
          </div>
          <div>
            <button>
              <img
                src={ComAdd}
                alt="짜여진 견적을 추가하려면 클릭"
                style={{ height: "50px", width: "50px" }}
              />
              추가
            </button>
            <button>
              <img
                src={ComDelete}
                alt="짜여진 견적을 삭제하려면 클릭"
                style={{ height: "50px", width: "50px" }}
              />
              삭제
            </button>
          </div>
        </div>
        <div>
          <button>수정 완료</button>
        </div>
      </div>
    </div>
  );
}
