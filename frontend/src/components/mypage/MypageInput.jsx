import React from "react";
import "../../css/mypageInput.css";

const MypageInput = (props) => {
  return (
    <div className="mypage-input">
      <label className="mypage-input__title">{props.name}</label>
      <input
        type="text"
        id="name"
        className="mypage-input__input"
        value={props.info}
        onChange={props.onChangeHandler}
        disabled={!props.edit}
        onKeyUp={props.onKeyUpHandler}
      />
    </div>
  );
};

export default MypageInput;
