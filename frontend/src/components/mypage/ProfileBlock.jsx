import React, { useState } from "react";
import "../../css/mypageProfile.css";

const ProfileBlock = () => {
  const [image, setImage] = useState("");

  const [name, setName] = useState("닉네임");

  const [nameEdit, setNameEdit] = useState(false);

  const [isName, setIsName] = useState(false);

  const [nameMessage, setNameMessage] = useState("");

  const onChangeProfileHandler = () => {
    setNameEdit(true);
  };

  const onChangeNameHandler = (event) => {
    const name = event.target.value;
    setName(name);
    const nameRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

    if (nameRegex.test(name)) {
      setNameMessage("특수문자는 사용할 수 없습니다.");
      setIsName(false);
    } else {
      setNameMessage("");
      setIsName(true);
    }
  };

  const onKeyPressProfileHandler = (event) => {
    if (event.key === "Enter" && isName) {
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
      {<span className="error__message-name">{nameMessage}</span>}
    </div>
  );
};

export default ProfileBlock;
