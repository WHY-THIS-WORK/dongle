import React from "react";
import "../../css/mypageInput.css";

const MypageInput = (props) => {
  return (
    <div className="mypage-input">
      <label className="mypage-input__title">{props.name}</label>
      <input
        type="text"
        id="name"
        maxLength={props.max}
        className="mypage-input__input"
        value={props.info}
        onChange={props.onChangeHandler}
        disabled={!props.edit}
        onKeyUp={props.onKeyUpHandler}
      />
      {<span className="error__message">{props.message}</span>}
    </div>
  );
};

export default MypageInput;
