import React from "react";
import "../../css/mypageProfile.css";
import { CgProfile } from "react-icons/cg";

const ProfileBlock = (props) => {
  return (
    <div className="profile-block">
      <div className="profile-block__content">
        <CgProfile className="profile-image" />
      </div>
      <div className="profile-block__content">
        <input
          type="text"
          className="profile-block__content-nickname"
          value={props.name}
          onChange={props.onChangeNameHandler}
          disabled={!props.nameEdit}
          onKeyUp={props.onNameKeyUpHandler}
        />
        <button
          className="profile-block__content-editbtn"
          onClick={props.onNameEditHandler}
        >
          수정
        </button>
      </div>
      {<span className="error__message-name">{props.message}</span>}
    </div>
  );
};

export default ProfileBlock;
