import React from "react";
import "../../css/profileEditBtn.css";

const MypageProfileEditBtn = (props) => {
  return (
    <div className="mypage-profile-edit">
      <button
        className="mypage-profile-edit__btn"
        onClick={props.onEditHandler}
      >
        회원정보 수정하기
      </button>
    </div>
  );
};

export default MypageProfileEditBtn;
