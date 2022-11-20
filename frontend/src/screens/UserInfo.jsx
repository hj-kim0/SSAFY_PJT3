import React from "react";
import "./UserInfo.scss";

export default function UserInfo(props) {
  return (
    <div className="info_body">
      <div className="info_user">
        <h3>
          <b>회원 정보</b>
        </h3>
        <br />
        <img
          className="profile"
          src={props.data.currentUser.information.imageUrl}
          id="info_picture"
          alt="Profile image"
        />
        <h4>
          <b>{props.data.currentUser.information.name}</b>
        </h4>
      </div>
    </div>
  );
}
