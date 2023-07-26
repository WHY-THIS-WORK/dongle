import React, { useState } from "react";
import "../../css/mypageProfile.css";

const ProfileBlock = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("닉네임");
  const [nameEdit, setNameEdit] = useState(false);

  const onChangeProfileHandler = () => {
    setName("");
    setNameEdit(true);
  };

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };

  const onKeyPressProfileHandler = (event) => {
    if (event.key === "Enter") {
      setName(event.target.value);
      setNameEdit(false);
    }
  };

  return (
    <div className="profile-block">
      <div className="profile-block__content">
        <img className="profile-block__content-img" src={image} />
      </div>
      <div className="profile-block__content">
        <input
          type="text"
          className="profile-block__content-nickname"
          value={name}
          onChange={onChangeNameHandler}
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
    </div>
  );
};

export default ProfileBlock;
