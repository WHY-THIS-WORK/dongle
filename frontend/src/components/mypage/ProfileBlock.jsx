import React, { useState } from "react";
import "../../css/mypageProfile.css";

const ProfileBlock = (props) => {
  const [nameEdit, setNameEdit] = useState(false);

  const onChangeProfileHandler = () => {
    setNameEdit(true);
  };

  const onKeyPressProfileHandler = (event) => {
    if (event.key === "Enter" && props.isName) {
      setNameEdit(false);
    }
  };

  return (
    <div className="profile-block">
      <div className="profile-block__content">
        <img className="profile-block__content-img" src={props.image} />
      </div>
      <div className="profile-block__content">
        <input
          type="text"
          className="profile-block__content-nickname"
          value={props.name}
          onChange={props.onChangeNameHandler}
          disabled={!nameEdit}
          onKeyUp={onKeyPressProfileHandler}
        />
        <button
          className="profile-block__content-editbtn"
          onClick={onChangeProfileHandler}
        >
          수정
        </button>
      </div>
      {<span className="error__message-name">{props.message}</span>}
    </div>
  );
};

export default ProfileBlock;
