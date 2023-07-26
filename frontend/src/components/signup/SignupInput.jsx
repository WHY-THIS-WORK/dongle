import React, { forwardRef } from "react";
import "../../css/input.css";

const SignupInput = forwardRef((props, ref) => {
  return (
    <div className="signup__form-block">
      <label className="signup__form-title">{props.title}</label>
      <input
        type={`${props.type}`}
        id={`${props.id}`}
        value={props.value}
        className="signup__form-input"
        placeholder={`${props.placeholder}`}
        onChange={props.onChangeHandler}
        ref={ref}
      />
      {<span className="error__message">{props.message}</span>}
    </div>
  );
});

export default SignupInput;

/* <div className="signup__form-block">
              <label className="signup__form-title">이름</label>
              <input
                type="text"
                id="name"
                maxLength={5}
                value={name}
                className="signup__form-input"
                placeholder="이름을 입력해주세요."
                onChange={onNameChangeHandler}
                ref={nameRef}
              />
              {<span className="error__message">{nameMessage}</span>}
            </div> */
