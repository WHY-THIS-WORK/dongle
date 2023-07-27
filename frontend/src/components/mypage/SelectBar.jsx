import React from "react";
import "../../css/selectbar.css";

const SelectBar = (props) => {
  return (
    <div className="mypage-selectbar">
      <div
        className={`${
          props.selected
            ? "mypage-selectbar__box"
            : "mypage-selectbar__box-selected"
        }`}
        onClick={props.selectHandler}
      >
        프로필
      </div>
      <div
        className={`${
          !props.selected
            ? "mypage-selectbar__box"
            : "mypage-selectbar__box-selected"
        }`}
        onClick={props.selectHandler}
      >
        내 동아리
      </div>
    </div>
  );
};

export default SelectBar;
