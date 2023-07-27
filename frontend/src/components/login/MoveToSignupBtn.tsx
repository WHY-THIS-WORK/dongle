import React from "react";
import "../../css/signupbutton.css";

const MoveToSignupBtn = () => {
  const onSignupHandler = () => {
    window.location.href = "signup";
  };

  return (
    <div className="signup__button">
      <button
        id="signup"
        type="button"
        className="signup__button-button"
        onClick={onSignupHandler}
      >
        회원가입
      </button>
    </div>
  );
};

export default MoveToSignupBtn;
