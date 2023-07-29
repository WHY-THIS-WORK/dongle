import React from "react";

const MypageLogoutBtn = (props) => {
  return (
    <div className="mypage-profile-edit">
      <button
        className="mypage-profile-edit__btn"
        onClick={props.onLogOutHandler}
      >
        로그아웃
      </button>
    </div>
  );
};

export default MypageLogoutBtn;
