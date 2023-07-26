import React, { useState } from "react";
import "../../css/mypageMain.css";
import ProfileBlock from "./ProfileBlock";
import MypageInput from "./MypageInput";
import MypageProfileEditBtn from "./MypageProfileEditBtn";

const MyProfile = () => {
  const [email, setEmail] = useState("TEST@TEST.com");
  const [tel, setTel] = useState("010-1234-1234");
  const [emailEdit, setEmailEdit] = useState(false);
  const [telEdit, setTelEdit] = useState(false);

  const onEditHandler = () => {
    setEmailEdit(true);
    setTelEdit(true);
  };

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onTelChangeHandler = (event) => {
    setTel(event.target.value);
  };

  const onEmailKeyUpHandler = (event) => {
    if (event.key === "Enter") {
      setEmail(event.target.value);
      setEmailEdit(false);
    }
  };

  const onTelKeyUpHandler = (event) => {
    if (event.key === "Enter") {
      setTel(event.target.value);
      setTelEdit(false);
    }
  };

  return (
    <div className="mypage-main">
      <div className="mypage-main__title">회원정보</div>
      <ProfileBlock />
      <div className="mypage-input-box">
        <div className="mypage-input-container">
          <MypageInput
            name={"이메일"}
            info={email}
            edit={emailEdit}
            onChangeHandler={onEmailChangeHandler}
            onKeyUpHandler={onEmailKeyUpHandler}
          />
          <MypageInput
            name={"연락처"}
            info={tel}
            edit={telEdit}
            onChangeHandler={onTelChangeHandler}
            onKeyUpHandler={onTelKeyUpHandler}
          />
          <MypageProfileEditBtn onEditHandler={onEditHandler} />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
