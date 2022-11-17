import React from "react";
import ComAdd from "../assets/images/login/Add.png";
import ComDelete from "../assets/images/login/Delete.png";
import ProfilePicture from "../assets/images/common/user.png";
import ComputerAdd from "../assets/images/common/Computer_Add.png";

import "./UserInfo.scss";

export default function UserInfo(props) {
  return (
    <div className="info_body">
      <div className="info_user">
        <h1>
          <b>회원 정보</b>
        </h1>
        <br />
        <img
          className="profile"
          src={props.data.currentUser.information.imageUrl}
          id="info_picture"
          alt="Profile image"
        />
        <h2>
          <b>{props.data.currentUser.information.name}</b>
        </h2>
      </div>
      <div className="info_pc">
        <div>
          <button id="add_button">
            <img
              id="pc_add"
              src={ComputerAdd}
              alt="견적을 맞춘 내 컴퓨터를 추가하려면 클릭"
            />
          </button>
        </div>
        <div>
          <p style={{ display: "inline" }}></p>
          <button id="mypc_list">내 컴퓨터</button>
          <button>
            <img
              src={ComAdd}
              alt="짜여진 견적을 추가하려면 클릭"
              id="add_but"
            />
          </button>
          <button>
            <img
              src={ComDelete}
              alt="짜여진 견적을 삭제하려면 클릭"
              id="sub_but"
            />
          </button>
        </div>
      </div>
      <div>
        <button type="EditComplete" id="button_complete">
          수정 완료
        </button>
      </div>
    </div>
  );
}
